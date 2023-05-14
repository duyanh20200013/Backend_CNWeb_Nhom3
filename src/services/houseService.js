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
                where: { status: 'Active' },
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
                        attributes: ['firstName', 'lastName', 'phone', 'address', 'image']
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
                status: 'Wait Cofirm Create',
                name: data.name,
                title: data.title,
                price: data.price,
                star: 5.0,
                countReview: 0
            })
            let houseId = newHouse.id;

            await db.House_Info.create({
                houseId: houseId,
                kindOfHouse: data.House_Info.kindOfHouse,
                descriptionHTML: data.House_Info.descriptionHTML,
                descriptionMarkDown: data.House_Info.descriptionMarkDown,
                address: data.House_Info.address,
                addressDescription: data.House_Info.addressDescription,
                location: data.House_Info.location,
                maxGuests: data.House_Info.maxGuests,
                allowAnimals: data.House_Info.allowAnimals,
                countBed: data.House_Info.countBed,
                countBathRoom: data.House_Info.countBathRoom,
            })
            let imageArray = data.House_Image
            for (var index = 0; index < imageArray.length; index++) {
                await db.House_Image.create({
                    houseId: houseId,
                    url: imageArray[index].url
                })
            }
            let typeIdArray = data.House_Type
            for (var index = 0; index < typeIdArray.length; index++) {
                await db.House_Type.create({
                    houseId: houseId,
                    typeId: typeIdArray[index]
                })
            }
            let convenientIdArray = data.House_Convenient
            for (var index = 0; index < convenientIdArray.length; index++) {
                await db.House_Convenient.create({
                    houseId: houseId,
                    convenientId: convenientIdArray[index]
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

let deleteHouse = (houseId, userId, userRole) => {
    return new Promise(async (resolve, reject) => {
        try {
            let house = await db.House.findOne({
                where: { id: houseId }
            })
            if (!house) {
                resolve({
                    errCode: 1,
                    errMessage: `The house isn't exist`
                })
            } else {
                if (userRole === 'Owner' && userId !== house.ownerId) {
                    resolve({
                        errCode: 2,
                        errMessage: `The user is not owner of house`
                    })
                } else {
                    await db.House.destroy({
                        where: { id: houseId }
                    })
                    await db.House_Info.destroy({
                        where: { houseId: houseId }
                    })
                    await db.House_Type.destroy({
                        where: { houseId: houseId }
                    })
                    await db.House_Convenient.destroy({
                        where: { houseId: houseId }
                    })
                    await db.House_Image.destroy({
                        where: { houseId: houseId }
                    })
                    await db.Update_House.destroy({
                        where: { houseIdUpdate: houseId }
                    })
                    // Hoàn thiện khi viết xong con review

                    // await db.Review.destroy({
                    //     where: { houseId: houseId }
                    // })
                    resolve({
                        errCode: 0,
                        errMessage: `Delete Successfully`
                    })
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updateHouse = (houseId, userId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let house = await db.House.findOne({
                where: { id: houseId },
                raw: false
            })
            if (!house) {
                resolve({
                    errCode: 1,
                    errMessage: `House not found!`
                })
            } else {
                if (house.ownerId !== userId) {
                    resolve({
                        errCode: 2,
                        errMessage: `User is not owner house`
                    })
                } else {
                    let newHouseUpdate = await db.House.create({
                        provinceCode: data.provinceCode,
                        districtCode: data.districtCode,
                        ownerId: house.ownerId,
                        status: 'Wait Cofirm Update',
                        name: data.name,
                        title: data.title,
                        price: data.price,
                        star: house.star,
                        countReview: house.countReview
                    })

                    let houseIdUpdate = newHouseUpdate.id
                    await db.House_Info.create({
                        houseId: houseIdUpdate,
                        kindOfHouse: data.House_Info.kindOfHouse,
                        descriptionHTML: data.House_Info.descriptionHTML,
                        descriptionMarkDown: data.House_Info.descriptionMarkDown,
                        address: data.House_Info.address,
                        addressDescription: data.House_Info.addressDescription,
                        location: data.House_Info.location,
                        maxGuests: data.House_Info.maxGuests,
                        allowAnimals: data.House_Info.allowAnimals,
                        countBed: data.House_Info.countBed,
                        countBathRoom: data.House_Info.countBathRoom,
                    })
                    let imageArray = data.House_Image
                    for (var index = 0; index < imageArray.length; index++) {
                        await db.House_Image.create({
                            houseId: houseIdUpdate,
                            url: imageArray[index].url
                        })
                    }
                    let typeIdArray = data.House_Type
                    for (var index = 0; index < typeIdArray.length; index++) {
                        await db.House_Type.create({
                            houseId: houseIdUpdate,
                            typeId: typeIdArray[index]
                        })
                    }
                    let convenientIdArray = data.House_Convenient
                    for (var index = 0; index < convenientIdArray.length; index++) {
                        await db.House_Convenient.create({
                            houseId: houseIdUpdate,
                            convenientId: convenientIdArray[index]
                        })
                    }
                    await db.Update_House.create({
                        houseIdUpdate: houseIdUpdate,
                        houseId: house.id
                    })
                    resolve({
                        errCode: 0,
                        errMessage: 'Update Success!'
                    })
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}

let searchHouse = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

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
    createHouse: createHouse,
    deleteHouse: deleteHouse,
    updateHouse: updateHouse
}