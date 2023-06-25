import db from '../models/index'
const { Op, where } = require("sequelize");

let getAllProvince = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let provinces = await db.Province.findAll()
            resolve({
                errCode: 0,
                data: provinces
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllDistrictOfProvince = (provinceCode) => {
    return new Promise(async (resolve, reject) => {
        try {
            let districts = await db.District.findAll({
                where: { provinceCode: provinceCode }
            })
            resolve({
                errCode: 0,
                data: districts
            })
        } catch (e) {
            reject(e);
        }
    })
}

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

let getAllTypeConvenients = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let arrayName = [];
            let typeConvenients = await db.Convenient.findAll({
                attributes: ['typeConvenient'],
                raw: false
            })
            for (var index = 0; index < typeConvenients.length; index++) {
                arrayName.push(typeConvenients[index].typeConvenient)
            }
            resolve({
                errCode: 0,
                data: Array.from(new Set(arrayName))
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllHouseActive = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let HouseList = await db.House.findAll({
                where: { status: 'Active' },
                attributes: {
                    exclude: ['provinceCode', 'districtCode'],
                },
                include: [
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
                data: HouseList
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
            let dataReview = await db.Review.findAll({
                where: { houseId: inputId },
                attributes: ['customerId', 'star', 'description', 'createdAt', 'updatedAt'],
                include: [
                    {
                        model: db.User,
                        as: 'userReviewData',
                        attributes: ['firstName', 'lastName', 'image']
                    }
                ],
                raw: false,
                nest: true
            })
            let dataContract = await db.Contract.findAll({
                where: {
                    houseId: inputId,
                    [Op.or]: [{ status: 'Đang chờ xác nhận' }, { status: 'Đặt cọc' }, { status: 'Hoàn tất thanh toán' }, { status: 'Hoàn thành' }]
                },
                attributes: ['arriveDate', 'leftDate']
            })
            let data = await db.House.findOne({
                where: { id: inputId },
                attributes: {
                    exclude: ['provinceCode', 'districtCode'],
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
            if (dataReview) {
                for (var review of dataReview) {
                    review.userReviewData.image = Buffer.from(review.userReviewData.image, 'base64').toString('binary')
                }
            }
            resolve({
                errCode: 0,
                data: data,
                dataContract: dataContract,
                dataReview: dataReview,
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
                star: 0.0,
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
                    await db.Favourite_House.destroy({
                        where: { houseId: houseId }
                    })
                    await db.Contract.destroy({
                        where: { houseId: houseId }
                    })
                    await db.Review.destroy({
                        where: { houseId: houseId }
                    })
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
            let priceArray = [0, 10000000];

            //Hoàn thiện phần check thời gian sau khi làm xong ContractService
            //Tìm list nhà bị trùng lịch không thể đặt
            let houseIdSameDate = [];
            if (data.time) {
                let contracts = await db.Contract.findAll({
                    where: {
                        [Op.or]: {
                            arriveDate: {
                                [Op.gte]: data.time.arriveDate,
                                [Op.lte]: data.time.leftDate
                            },
                            leftDate: {
                                [Op.gte]: data.time.arriveDate,
                                [Op.lte]: data.time.leftDate
                            }
                        },
                        status: {
                            [Op.or]: ['Đang chờ xác nhận', 'Đặt cọc', 'Hoàn tất thanh toán', 'Hoàn thành']
                        }
                    },
                    attributes: ['houseId'],
                    raw: false
                })
                for (var contract of contracts) {
                    houseIdSameDate.push(contract.houseId);
                }
            }

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
            if (data.guest) {
                houseInfoObject.maxGuests = { [Op.gte]: data.guest, }
            }
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
            //Check điều kiện Price
            if (data.minPrice && data.maxPrice) {
                priceArray = [data.minPrice, data.maxPrice]
            }
            let house = await db.House.findAll({
                where: {
                    price: {
                        [Op.between]: priceArray
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
            //Convert Owner.Image sang binary và xoá các nhà bị trùng lịch
            let newHouseafterRemove = []
            if (house) {
                newHouseafterRemove = house.filter(item => !houseIdSameDate.includes(item.id))
                if (newHouseafterRemove.length > 0) {
                    for (var i = 0; i < newHouseafterRemove.length; i++) {
                        newHouseafterRemove[i].ownerData.image = Buffer.from(newHouseafterRemove[i].ownerData.image, 'base64').toString('binary');
                    }
                }
            }
            resolve({
                errCode: 0,
                errMessage: 'OK',
                countHouse: newHouseafterRemove.length,
                data: newHouseafterRemove,
            })
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllProvince: getAllProvince,
    getAllDistrictOfProvince: getAllDistrictOfProvince,
    getAllHouseOfType: getAllHouseOfType,
    getAllTypes: getAllTypes,
    getAllConvenients: getAllConvenients,
    getAllTypeConvenients: getAllTypeConvenients,
    getAllHouseActive: getAllHouseActive,
    getDetailHouseById: getDetailHouseById,
    createHouse: createHouse,
    deleteHouse: deleteHouse,
    updateHouse: updateHouse,
    searchHouse: searchHouse,
}