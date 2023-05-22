import userService from "../services/userService";
const sgMail = require("@sendgrid/mail");
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


let handleCreateNewUser = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    // if (message.errCode === 0) {
    //     const msg = {
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
    //         .send(msg)
    //         .then(() => { }, error => {
    //             console.error(error);
    //             if (error.response) {
    //                 console.error(error.response.body)
    //             }
    //         });
    // }
    return res.status(200).json(message)
}

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }

    let userData = await userService.handleUserLogin(email, password);

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        userData: userData ? userData : {},

    })
}

let generateToken = async (req, res) => {
    let refreshToken = req.body.refreshToken;

    if (!refreshToken) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }

    let data = await userService.generateToken(refreshToken);

    return res.status(200).json({
        errCode: data.errCode,
        message: data.errMessage,
        access_token: data.access_token ? data.access_token : {},
    })
}

let handleLogout = async (req, res) => {
    let id = req.user.id;

    if (!id) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }

    let message = await userService.handleLogout(id);

    return res.status(200).json(message)
}

let resetPassword = async (req, res) => {
    let email = req.body.email;

    if (!email) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }

    let message = await userService.resetPassword(email);
    if (message.errCode === 0) {
        const msg = {
            to: email,
            from: process.env.SENDGRID_EMAIL,
            subject: "Password Reset",
            html: `
        <p>You requested a password reset</p>
        <p>Click this <a href="http://localhost:8080/auth/update-password?token=${message.token}">link</a> to set a new password</p>
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
    }

    return res.status(200).json(message)
}

let handleChangePassword = async (req, res) => {
    let newPassword = req.body.newPassword;
    let token = req.query.token

    if (!newPassword) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await userService.handleChangePassword(token, newPassword);
    return res.status(200).json(message)
}

let updateprofile = async (req, res) => {
    let id_user = req.user.id;
    let data = req.body.data

    if (!id_user || !data.firstName || !data.lastName || !data.address || !data.gender || !data.phone) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await userService.updateprofile(id_user, data);
    return res.status(200).json(message)
}

module.exports = {
    handleCreateNewUser: handleCreateNewUser,
    handleLogin: handleLogin,
    generateToken: generateToken,
    handleLogout: handleLogout,
    resetPassword: resetPassword,
    handleChangePassword: handleChangePassword,
    updateprofile: updateprofile
}