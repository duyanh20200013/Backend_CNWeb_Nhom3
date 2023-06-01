import ownerService from '../services/ownerService';

let createVerifyInfomation = async (req, res) => {
    let data = req.body.data
    let ownerId = req.user.id

    if (!data.cardNumber || !data.accountName || !ownerId || !data.bankName || !data.CCCDNumber) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await ownerService.createVerifyInfomation(ownerId, data);
    return res.status(200).json(message)
}

let getVerifyInfomation = async (req, res) => {
    let ownerId = req.query.userId
    let userId = req.user.id
    let userRole = req.user.role
    if (!ownerId || !userId || !userRole) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }

    if (userRole === 'Admin' || (userRole === 'Owner' && ownerId == userId)) {
        let message = await ownerService.getVerifyInfomation(ownerId);
        return res.status(200).json(message)
    }

    return res.status(401).json({
        message: "Access Denied - Unauthorized",
    });
}

let updateVerifyInfomation = async (req, res) => {
    let data = req.body.data
    let ownerId = req.user.id

    if (!data.cardNumber || !data.accountName || !ownerId || !data.bankName || !data.CCCDNumber) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await ownerService.updateVerifyInfomation(ownerId, data);
    return res.status(200).json(message)
}

module.exports = {
    createVerifyInfomation: createVerifyInfomation,
    getVerifyInfomation: getVerifyInfomation,
    updateVerifyInfomation: updateVerifyInfomation
}