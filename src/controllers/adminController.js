import adminService from '../services/adminService';

let confirmCreateHouse = async (req, res) => {
    let inputId = req.body.houseId
    if (!inputId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await adminService.confirmCreateHouse(inputId);
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
    return res.status(200).json(message);
}

module.exports = {
    confirmCreateHouse: confirmCreateHouse,
    confirmUpdateHouse: confirmUpdateHouse
}