import db from "../models/index";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require('dotenv').config();
const { Op } = require("sequelize");

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

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};

            let isExist = await checkUserEmail(email);
            if (isExist) {
                let user = await db.User.findOne({
                    where: { email: email },
                    raw: false
                });
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'OK';
                        user.image = Buffer.from(user.image, 'base64').toString('binary')
                        let userDataToken = {
                            id: user.id,
                            email: user.email
                        }
                        const access_token = jwt.sign(userDataToken, process.env.ACCESS_TOKEN_SECRET, {
                            expiresIn: 3600,
                        });
                        const refresh_token = jwt.sign(userDataToken, process.env.REFRESH_TOKEN_SECRET, {
                            expiresIn: 60 * 60 * 24 * 90,
                        });
                        user.refreshToken = refresh_token;
                        await user.save();
                        delete user.password;
                        userData.access_token = access_token,
                            userData.refresh_token = refresh_token,
                            userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User's not found !`
                }

            } else {
                userData.errCode = 1;
                userData.errMessage = `Your's Email isn't exist in your system. Plz try other email !`;
            }

            resolve(userData)
        } catch (e) {
            reject(e);
        }
    })
}

let generateToken = (refreshToken) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = {}
            let user = await db.User.findOne({
                where: { refreshToken: refreshToken },
                raw: false
            })
            if (user) {
                jwt.verify(
                    refreshToken,
                    process.env.REFRESH_TOKEN_SECRET,
                    (err, decode) => {
                        if (err) {
                            data.errCode = 2;
                            data.errMessage = 'Invalid Token'
                        } else {
                            let userDataToken = {
                                id: decode.id,
                                email: decode.email
                            }
                            const access_token = jwt.sign(userDataToken, process.env.ACCESS_TOKEN_SECRET, {
                                expiresIn: 3600,
                            });
                            data.errCode = 0;
                            data.errMessage = 'OK'
                            data.access_token = access_token;
                        }
                        return data;
                    }
                )
            } else {
                data.errCode = 1;
                data.errMessage = `Refresh token not found`
            }
            resolve(data);
        } catch (e) {
            reject(e);
        }

    })
}

let handleLogout = (id) => {
    return new Promise(async (resolve, reject) => {
        try {

            let user = await db.User.findOne({
                where: { id: id },
                raw: false
            })
            user.refreshToken = null;
            await user.save();

            resolve({
                message: 'Logout Successfully!'
            });
        } catch (e) {
            reject(e);
        }

    })
}

let resetPassword = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: email },
                raw: false
            })
            if (!user) {
                resolve({
                    errCode: 1,
                    errMessage: 'Your email is incorrect, please try again'
                })
            } else {
                let token = crypto.randomBytes(32).toString('hex')
                user.resetToken = token;
                user.resetTokenExpiration = Date.now() + 360000;
                await user.save();
                resolve({
                    errCode: 0,
                    errMessage: 'OK',
                    token: token
                });
            }
        } catch (e) {
            reject(e);
        }

    })
}

let handleChangePassword = (token, newPassword) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: {
                    resetToken: token,
                    resetTokenExpiration: { [Op.gt]: Date.now() }
                },
                raw: false
            })
            if (!user) {
                resolve({
                    errCode: 1,
                    errMessage: 'Your reset token is invalid or expired'
                })
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(newPassword);
                user.password = hashPasswordFromBcrypt;
                user.resetToken = null;
                user.resetTokenExpiration = null;
                await user.save();
                resolve({
                    errCode: 0,
                    errMessage: 'New password updated'
                })
            }
        } catch (e) {
            reject(e);
        }

    })
}

let updateprofile = (id_user, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: id_user },
                raw: false
            })
            if (!user) {
                resolve({
                    errCode: 1,
                    errMessage: 'User not found'
                })
            } else {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.gender = data.gender;
                user.phone = data.phone;
                if (data.image) user.image = data.image
                await user.save();
                resolve({
                    errCode: 0,
                    errMessage: 'Update Successfully!',
                })
            }
        } catch (e) {
            reject(e);
        }

    })
}

module.exports = {
    createNewUser: createNewUser,
    handleUserLogin: handleUserLogin,
    generateToken: generateToken,
    handleLogout: handleLogout,
    resetPassword: resetPassword,
    handleChangePassword: handleChangePassword,
    updateprofile: updateprofile
}