import customerService from '../services/customerService';

let addFavouriteHouse = async (req, res) => {
    let data = req.body.data
    let customerId = req.user.id

    if (!data.name || !data.houseId || !customerId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await customerService.addFavouriteHouse(data.name, data.houseId, customerId);
    return res.status(200).json(message)
}

let getAllNameListFavourite = async (req, res) => {
    let customerId = req.user.id
    if (!customerId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await customerService.getAllNameListFavourite(customerId);
    return res.status(200).json(message)
}

let getAllHouseOfOneFavouriteList = async (req, res) => {
    let customerId = req.user.id
    let name = req.body.name
    if (!customerId || !name) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await customerService.getAllHouseOfOneFavouriteList(customerId, name);
    return res.status(200).json(message)
}

let getAllFavouriteHouseId = async (req, res) => {
    let customerId = req.user.id
    if (!customerId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await customerService.getAllFavouriteHouseId(customerId);
    return res.status(200).json(message)
}

let deleteOneFavouriteHouse = async (req, res) => {
    let customerId = req.user.id
    let houseId = req.body.houseId
    if (!customerId || !houseId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await customerService.deleteOneFavouriteHouse(houseId, customerId);
    return res.status(200).json(message)
}

let deleteFavouriteHouseByName = async (req, res) => {
    let customerId = req.user.id
    let name = req.body.name
    if (!customerId || !name) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await customerService.deleteFavouriteHouseByName(name, customerId);
    return res.status(200).json(message)
}

let updateNameFavouriteList = async (req, res) => {
    let customerId = req.user.id;
    let name = req.body.name;
    let newName = req.body.newName;
    if (!customerId || !name || !newName) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await customerService.updateNameFavouriteList(name, newName, customerId);
    return res.status(200).json(message)
}

let createContract = async (req, res) => {
    let data = req.body.data
    let customerId = req.user.id

    if (!data.houseId || !data.arriveDate || !customerId || !data.leftDate ||
        !data.price || !data.numberOver13 || !data.numberUnder13 || !data.numberChildren || !data.haveAnimals) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await customerService.createContract(customerId, data);
    return res.status(200).json(message)
}

let getAllContractOfCustomer = async (req, res) => {
    let customerId = req.query.userId;
    let userId = req.user.id;
    let userRole = req.user.role
    if (!customerId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    if (userRole === 'Admin' || (userRole === 'Owner' && customerId === userId)) {
        let message = await customerService.getAllContractOfCustomer(customerId);
        return res.status(200).json(message)
    }
    return res.status(401).json({
        message: "Access Denied - Unauthorized",
    });
}

module.exports = {
    addFavouriteHouse: addFavouriteHouse,
    getAllNameListFavourite: getAllNameListFavourite,
    getAllHouseOfOneFavouriteList: getAllHouseOfOneFavouriteList,
    getAllFavouriteHouseId: getAllFavouriteHouseId,
    deleteOneFavouriteHouse: deleteOneFavouriteHouse,
    deleteFavouriteHouseByName: deleteFavouriteHouseByName,
    updateNameFavouriteList: updateNameFavouriteList,
    createContract: createContract,
    getAllContractOfCustomer: getAllContractOfCustomer
}