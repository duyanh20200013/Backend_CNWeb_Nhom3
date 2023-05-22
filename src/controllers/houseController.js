import houseService from '../services/houseService'

let getAllTypes = async (req, res) => {
    try {
        let types = await houseService.getAllTypes()
        return res.status(200).json(types)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getAllHouseOfType = async (req, res) => {
    try {
        let types = await houseService.getAllHouseOfType(req.query.id)
        return res.status(200).json(types)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getAllConvenients = async (req, res) => {
    try {
        let types = await houseService.getAllConvenients()
        return res.status(200).json(types)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getAllTypeConvenients = async (req, res) => {
    try {
        let types = await houseService.getAllTypeConvenients()
        return res.status(200).json(types)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getAllHouseActive = async (req, res) => {
    try {
        let houses = await houseService.getAllHouseActive()
        return res.status(200).json(houses)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getDetailHouseById = async (req, res) => {
    try {
        let types = await houseService.getDetailHouseById(req.query.id)
        return res.status(200).json(types)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let createHouse = async (req, res) => {
    let data = req.body.data
    data.ownerId = req.user.id

    if (!data.provinceCode || !data.districtCode || !data.name || !data.title ||
        !data.price || !data.House_Info || !data.House_Image ||
        !data.House_Type || !data.House_Convenient) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await houseService.createHouse(data);
    return res.status(200).json(message)
}

let deleteHouse = async (req, res) => {
    let houseId = req.query.houseId

    if (!houseId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await houseService.deleteHouse(houseId, req.user.id, req.user.role);
    return res.status(200).json(message)
}

let updateHouse = async (req, res) => {
    let houseId = req.query.houseId
    let data = req.body.data

    if (!houseId || !data.provinceCode || !data.districtCode || !data.name ||
        !data.title || !data.price || !data.House_Info || !data.House_Image ||
        !data.House_Type || !data.House_Convenient) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await houseService.updateHouse(houseId, req.user.id, data);
    return res.status(200).json(message)
}

let searchHouse = async (req, res) => {
    let data = req.body.data

    if (!data) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await houseService.searchHouse(data);
    return res.status(200).json(message)
}

module.exports = {
    getAllTypes: getAllTypes,
    getAllHouseOfType: getAllHouseOfType,
    getAllConvenients: getAllConvenients,
    getAllTypeConvenients: getAllTypeConvenients,
    getAllHouseActive: getAllHouseActive,
    getDetailHouseById: getDetailHouseById,
    createHouse: createHouse,
    deleteHouse: deleteHouse,
    updateHouse: updateHouse,
    searchHouse: searchHouse,
}