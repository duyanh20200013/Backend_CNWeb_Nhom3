import adminService from '../services/adminService';
const sgMail = require("@sendgrid/mail");
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

let confirmCreateHouse = async (req, res) => {
    let inputId = req.body.houseId
    if (!inputId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await adminService.confirmCreateHouse(inputId);
    if (message.errCode === 0) {
        const msg = {
            to: message.emailOwner,
            from: process.env.SENDGRID_EMAIL,
            subject: "Create Successfully",
            html: `
              <h1>Accepted Create House</h1>
              <p>Your request to create a home is accepted</p>
              <p>Thank you for using our website</p>
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
        delete message.emailOwner;
    }
    return res.status(200).json(message);
}

let getAllHouseWaitCreate = async (req, res) => {
    let message = await adminService.getAllHouseWaitCreate();
    return res.status(200).json(message);
}

let getAllHouseWaitUpdate = async (req, res) => {
    let message = await adminService.getAllHouseWaitUpdate();
    return res.status(200).json(message);
}

let confirmUpdateHouse = async (req, res) => {
    let inputId = req.query.houseId
    if (!inputId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await adminService.confirmUpdateHouse(inputId);
    if (message.errCode === 0) {
        const msg = {
            to: message.emailOwner,
            from: process.env.SENDGRID_EMAIL,
            subject: "Update Successfully",
            html: `
              <h1>Accepted Update House</h1>
              <p>Your request to update a house is accepted</p>
              <p>Thank you for using our website</p>
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
        delete message.emailOwner;
    }
    return res.status(200).json(message);
}

let rejectCreateHouse = async (req, res) => {
    let inputId = req.query.houseId
    if (!inputId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await adminService.rejectCreateHouse(inputId);
    if (message.errCode === 0) {
        const msg = {
            to: message.emailOwner,
            from: process.env.SENDGRID_EMAIL,
            subject: "Reject Create House",
            html: `
              <h1>Reject Create House</h1>
              <p>Your request to create a house is reject</p>
              <p>You should update the appropriate information to be approved</p>
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
        delete message.emailOwner;
    }
    return res.status(200).json(message);
}

let rejectUpdateHouse = async (req, res) => {
    let inputId = req.query.houseId
    if (!inputId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await adminService.rejectUpdateHouse(inputId);
    if (message.errCode === 0) {
        const msg = {
            to: message.emailOwner,
            from: process.env.SENDGRID_EMAIL,
            subject: "Reject Update House",
            html: `
              <h1>Reject Update House</h1>
              <p>Your request to update a house is reject</p>
              <p>You should update the appropriate information to be approved</p>
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
        delete message.emailOwner;
    }
    return res.status(200).json(message);
}

let getAllOwnerHouse = async (req, res) => {
    let message = await adminService.getAllOwnerHouse();
    return res.status(200).json(message);
}

let getAllCustomer = async (req, res) => {
    let message = await adminService.getAllCustomer();
    return res.status(200).json(message);
}

module.exports = {
    confirmCreateHouse: confirmCreateHouse,
    getAllHouseWaitCreate: getAllHouseWaitCreate,
    getAllHouseWaitUpdate: getAllHouseWaitUpdate,
    confirmUpdateHouse: confirmUpdateHouse,
    rejectCreateHouse: rejectCreateHouse,
    rejectUpdateHouse: rejectUpdateHouse,
    getAllOwnerHouse: getAllOwnerHouse,
    getAllCustomer: getAllCustomer
}