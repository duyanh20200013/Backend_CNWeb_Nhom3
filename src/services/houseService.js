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
                    {
                        model: db.User,
                        as: 'ownerData',
                        attributes: ['firstName', 'lastName', 'image']
                    },
                ],
                raw: false,
                nest: true
            })
            if (HouseList) {
                for (var i = 0; i < HouseList.length; i++) {
                    HouseList[i].ownerData.image = Buffer.from(HouseList[i].ownerData.image, 'base64').toString('binary')
                }
            }
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
            let houseInfoObject = {};
            let convenientsObject = {};
            let typeObject = {};
            let provinceObject = {};
            let districtObject = {};

            //Hoàn thiện phần check thời gian sau khi làm xong ContractService
            //let timeObject ={}

            // Check điều kiện trong House_Info
            if (data.kindOfHouse) {
                houseInfoObject.kindOfHouse = { [Op.or]: data.kindOfHouse }
            }
            if (data.countBed) {
                if (data.countBed == 8) {
                    houseInfoObject.countBed = { [Op.gte]: 8 }
                } else {
                    houseInfoObject.countBed = data.countBed
                }
            }
            if (data.countBathRoom) {
                if (data.countBathRoom == 8) {
                    houseInfoObject.countBathRoom = { [Op.gte]: 8 }
                } else {
                    houseInfoObject.countBathRoom = data.countBathRoom
                }
            }
            if (data.countBedRoom) {
                if (data.countBedRoom == 8) {
                    houseInfoObject.countBedRoom = { [Op.gte]: 8 }
                } else {
                    houseInfoObject.countBedRoom = data.countBedRoom
                }
            }
            houseInfoObject.maxGuests = { [Op.gte]: data.guest, }
            if (data.allowAnimals == false) {
                houseInfoObject.allowAnimals = false
            }

            // Check điều kiện trong House_Convenients
            // Search Convenient chưa tối ưu khi chỉ cần có 1 trong các Convenient đấy là dc trong khi yêu cầu cần có đủ hết Convenient
            if (data.convenients) {
                convenientsObject = {
                    convenientId: {
                        [Op.or]: data.convenients
                    }
                }
            }

            //Check điều kiện trong House_Type
            if (data.typeId) {
                typeObject = {
                    typeId: data.typeId
                }
            }

            //Check điều kiện trong Province
            if (data.provinceCode) {
                provinceObject = { code: data.provinceCode }
            }
            //Check điều kiện District
            if (data.districtCode) {
                districtObject = { code: data.districtCode }
            }
            let house = await db.House.findAll({
                where: {
                    price: {
                        [Op.between]: [data.minPrice, data.maxPrice]
                    },
                    status: 'Active'
                },
                include: [
                    {
                        model: db.House_Info,
                        attributes: [],
                        where: houseInfoObject
                    },
                    {
                        model: db.House_Type,
                        as: 'houseTypeIdData',
                        attributes: [],
                        where: typeObject
                    },
                    {
                        model: db.House_Convenient,
                        as: 'houseConvenientIdData',
                        attributes: [],
                        where: convenientsObject
                    },
                    {
                        model: db.District,
                        as: 'districtData',
                        attributes: ['code', 'name'],
                        where: districtObject,
                    },
                    {
                        model: db.Province,
                        as: 'provinceData',
                        attributes: ['code', 'name', 'phoneCode'],
                        where: provinceObject,
                    },
                    {
                        model: db.House_Image,
                        as: 'houseImageIdData',
                        attributes: ['url'],
                    },
                    {
                        model: db.User,
                        as: 'ownerData',
                        attributes: ['firstName', 'lastName', 'image']
                    },
                ],
                raw: false,
                nest: true
            })
            //Convert Owner.Image sang binary
            if (house) {
                for (var i = 0; i < house.length; i++) {
                    house[i].ownerData.image = Buffer.from(house[i].ownerData.image, 'base64').toString('binary')
                }
            }
            resolve({
                errCode: 0,
                errMessage: 'OK',
                countHouse: house.length,
                data: house
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
    createHouse: createHouse,
    deleteHouse: deleteHouse,
    updateHouse: updateHouse,
    searchHouse: searchHouse,
}