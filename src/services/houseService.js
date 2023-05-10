import db from '../models/index'
const { Op, where } = require("sequelize");

let getAllTypes = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let types = await db.Type.findAll()
            resolve({
                errCode: 0,
                data: types
            })
        } catch (e) {
            reject(e);
        }
    })
}
let getAllHouseOfType = (typeId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let HouseList = await db.House.findAll({
                attributes: {
                    exclude: ['provinceCode', 'districtCode'],
                },
                include: [
                    {
                        model: db.House_Type,
                        as: 'houseTypeIdData',
                        attributes: [],
                        where: { typeId: typeId }
                    },
                    {
                        model: db.House_Image,
                        as: 'houseImageIdData',
                        attributes: ['url'],
                    },
                    {
                        model: db.District,
                        as: 'districtData',
                        attributes: ['code', 'name']
                    },
                    {
                        model: db.Province,
                        as: 'provinceData',
                        attributes: ['code', 'name', 'phoneCode']
                    },
                ],
                raw: false,
                nest: true
            })
            resolve({
                errCode: 0,
                data: HouseList,
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllConvenients = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let convenients = await db.Convenient.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
            })
            resolve({
                errCode: 0,
                data: convenients
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getDetailHouseById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataType = await db.Type.findAll({
                attributes: ['name', 'linkIcon'],
                include: [
                    {
                        model: db.House_Type,
                        as: 'typeIdData',
                        attributes: [],
                        where: { houseId: inputId }
                    },
                ],
                raw: true
            })
            let dataConvenient = await db.Convenient.findAll({
                attributes: ['typeConvenient', 'name'],
                include: [
                    {
                        model: db.House_Convenient,
                        as: 'convenientData',
                        attributes: [],
                        where: { houseId: inputId }
                    },
                ],
                raw: true
            })
            let data = await db.House.findOne({
                where: { id: inputId },
                attributes: {
                    exclude: ['provinceCode', 'districtCode', 'ownerId'],
                },
                include: [
                    {
                        model: db.House_Image,
                        as: 'houseImageIdData',
                        attributes: ['url'],
                    },
                    {
                        model: db.House_Info,
                        attributes: {
                            exclude: ['id', 'houseId', 'createdAt', 'updatedAt'],
                        }
                    },
                    {
                        model: db.District,
                        as: 'districtData',
                        attributes: ['code', 'name']
                    },
                    {
                        model: db.Province,
                        as: 'provinceData',
                        attributes: ['code', 'name', 'phoneCode']
                    },
                    {
                        model: db.User,
                        as: 'ownerData',
                        attributes: ['firstName', 'lastName', 'phone', 'image']
                    },
                ],
                raw: false,
                nest: true
            })
            if (data) {
                // data.type = JSON.stringify(dataType);
                // console.log(data.type)
                // data.convenients = JSON.stringify(dataConvenient);
                data.ownerData.image = Buffer.from(data.ownerData.image, 'base64').toString('binary')
            }
            if (!data) data = {};
            resolve({
                errCode: 0,
                data: data,
                dataType: dataType,
                dataConvenient: dataConvenient
            })
        } catch (e) {
            reject(e);
        }
    })
}

let createHouse = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let newHouse = await db.House.create({
                provinceCode: data.provinceCode,
                districtCode: data.districtCode,
                ownerId: data.ownerId,
                status: 'Trống',
                name: data.name,
                title: data.title,
                price: data.price,
                star: data.star,
                countReview: data.countReview
            })
            let houseId = newHouse.id;

            await db.House_Info.create({
                houseId: houseId,
                kindOfHouse: data.House_Info.kindOfHouse,
                descriptionHTML: data.House_Info.descriptionHTML,
                descriptionMarkDown: data.House_Info.descriptionMarkDown,
                address: data.House_Info.address,
                location: data.House_Info.location,
                maxGuests: data.House_Info.maxGuests,
                allowAnimals: data.House_Info.allowAnimals,
                countBed: data.House_Info.countBed,
                countBathRoom: data.House_Info.countBathRoom,
            })
            let imageArray = data.House_Image
            for (var item = 0; item < imageArray.length; item++) {
                await db.House_Image.create({
                    houseId: houseId,
                    url: item.url
                })
            }
            let typeArray = data.House_Type
            for (var item = 0; item < typeArray.length; item++) {
                await db.House_Type.create({
                    houseId: houseId,
                    typeId: item.typeId
                })
            }
            let convenientArray = data.House_Convenient
            for (var item = 0; item < convenientArray.length; item++) {
                await db.House_Convenient.create({
                    houseId: houseId,
                    url: item.convenientId
                })
            }
            resolve({
                errCode: 0,
                message: 'Create House Successfully!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllHouseOfType: getAllHouseOfType,
    getAllTypes: getAllTypes,
    getAllConvenients: getAllConvenients,
    getDetailHouseById: getDetailHouseById,
}