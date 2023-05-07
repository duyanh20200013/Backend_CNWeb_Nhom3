import userService from "../services/userService";
const sgMail = require("@sendgrid/mail");
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


let handleCreateNewUser = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    // sgMail.send({
    //     to: req.body.email,
    //     from: process.env.SENDGRID_EMAIL,
    //     subject: "Registered",
    //     html: `
    //       <h1>Login  with your email and default password</h1>
    //       <p>Email: ${req.body.email}</p>
    //       <p>Password: ${process.env.DEFAULT_PASSWORD}</p>
    //       <p>Your role: ${req.body.role}</p>
    //       `,
    // });
    const msg = {
        to: req.body.email,
        from: process.env.SENDGRID_EMAIL,
        subject: "Registered",
        html: `
          <h1>Login  with your email and default password</h1>
          <p>Email: ${req.body.email}</p>
          <p>Password: ${process.env.DEFAULT_PASSWORD}</p>
          <p>Your role: ${req.body.role}</p>
          `,
    }

    sgMail
        .send(msg)
        .then(() => { }, error => {
            console.error(error);
            if (error.response) {
                console.error(error.response.body)
            }
        });
    return res.status(200).json(message)
}

module.exports = {
    handleCreateNewUser: handleCreateNewUser,
}