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

module.exports = {
    getAllTypes: getAllTypes,
    getAllHouseOfType: getAllHouseOfType,
    getAllConvenients: getAllConvenients,
    getDetailHouseById: getDetailHouseById,
}