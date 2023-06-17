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
//Xử lý House
let getAllHouseOfOwner = async (req, res) => {
    let ownerId = req.query.ownerId;
    if (!ownerId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    else {
        let message = await ownerService.getAllHouseOfOwner(ownerId);
        if (message.errCode === 0) {
            return res.status(200).json(message);
        } else {
            return res.status(404).json(message);
        }
    }
}

//Xử lý Contract
let getAllContractOfHouse = async (req, res) => {
    let houseId = req.query.houseId;
    let userId = req.user.id;
    let userRole = req.user.role;

    if (!houseId || !userId || !userRole) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    else {
        let message = await ownerService.getAllContractOfHouse(houseId);
        if (message.errCode == 0) {
            if (userRole === 'Admin' || message.data[0].houseContractData.ownerId == userId) {
                return res.status(200).json(message);
            } else {
                return res.status(401).json({
                    message: "Access Denied - Unauthorized",
                });
            }
        } else {
            return res.status(200).json(message);
        }
    }
}

let getAllContractOfOwner = async (req, res) => {
    let ownerId = req.query.ownerId;
    let userId = req.user.id;
    let userRole = req.user.role;

    if (!ownerId || !userId || !userRole) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    else {
        let message = await ownerService.getAllContractOfOwner(ownerId);
        if (userRole === 'Admin' || ownerId == userId) {
            if (message.errCode === 0) {
                return res.status(200).json(message);
            } else {
                return res.status(200).json(message);
            }
        } else {
            return res.status(401).json({
                message: "Access Denied - Unauthorized",
            });
        }
    }
}

module.exports = {
    createVerifyInfomation: createVerifyInfomation,
    getVerifyInfomation: getVerifyInfomation,
    updateVerifyInfomation: updateVerifyInfomation,
    getAllHouseOfOwner: getAllHouseOfOwner,
    getAllContractOfHouse: getAllContractOfHouse,
    getAllContractOfOwner: getAllContractOfOwner
}