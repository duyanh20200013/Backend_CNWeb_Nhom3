import db from "../models/index";
const bcrypt = require("bcryptjs");
// const sgMail = require("@sendgrid/mail");
require('dotenv').config();

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }

    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })

            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            //check email exist ????
            let check = await checkUserEmail(data.email)
            if (check === true) {
                resolve({
                    errCode: 1,
                    errMessage: 'Your email is alraedy in used, Plz try another email'
                })
            }
            else {
                let hashPasswordFromBcrypt = await hashUserPassword(process.env.DEFAULT_PASSWORD);
                await db.User.create({
                    email: data.email,
                    password: hashPasswordFromBcrypt,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phone: data.phone,
                    gender: data.gender,
                    image: data.image,
                    role: data.role,
                })
                resolve({
                    errCode: 0,
                    errMessage: 'OK'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

// let sendEmailRegister =(data)=>{
//     const msg ={
//         to: req.body.email,
//         from: process.env.SENDGRID_EMAIL,
//         subject: "Registered",
//         html: `
//           <h1>Login  with your email and default password</h1>
//           <p>Email: ${req.body.email}</p>
//           <p>Password: ${process.env.DEFAULT_PASSWORD}</p>
//           <p>Your role: ${req.body.role}</p>
//           `,
//     }

//     sgMail
//   .send(msg)
//   .then(() => {}, error => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   });
// }

module.exports = {
    createNewUser: createNewUser,
}