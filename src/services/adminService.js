import db from '../models/index'
import houseService from './houseService'

let confirmCreateHouse = (InputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let house = await db.House.findOne({
                where: { id: InputId },
                raw: false
            })
            if (!house) {
                resolve({
                    errCode: 1,
                    errMessage: 'House not found!'
                })
            } else {
                house.status = 'Active'
                await house.save();
                let emailOwner = await db.User.findOne({
                    where: { id: house.ownerId },
                    attributes: ['email'],
                    raw: false
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Duyệt thành công!',
                    emailOwner: emailOwner.email
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllHouseWaitCreate = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let house = await db.House.findAll({
                where: { status: 'Wait Cofirm Create' },
                raw: false,
                include: [
                    {
                        model: db.User,
                        as: 'ownerData',
                        attributes: ['firstName', 'lastName', 'image']
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
                ]
            })
            if (!house) {
                resolve({
                    errCode: 1,
                    errMessage: 'House not found!'
                })
            } else {
                for (var i = 0; i < house.length; i++) {
                    house[i].ownerData.image = Buffer.from(house[i].ownerData.image, 'base64').toString('binary')
                }
                resolve({
                    errCode: 0,
                    errMessage: 'OK',
                    data: house
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let rejectCreateHouse = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let house = await db.House.findOne({
                where: { id: inputId },
                raw: false
            })
            if (!house) {
                resolve({
                    errCode: 1,
                    errMessage: 'House not found!'
                })
            } else {
                let emailOwner = await db.User.findOne({
                    where: { id: house.ownerId },
                    attributes: ['email'],
                    raw: false
                })
                let message = await houseService.deleteHouse(inputId, 2, 'Admin')
                resolve({
                    errCode: 0,
                    errMessage: 'Từ chối Create House!',
                    emailOwner: emailOwner.email
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllHouseWaitUpdate = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let house = await db.House.findAll({
                where: { status: 'Wait Cofirm Update' },
                raw: false,
                include: [
                    {
                        model: db.User,
                        as: 'ownerData',
                        attributes: ['firstName', 'lastName', 'image']
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
                        model: db.Update_House,
                        attributes: ['houseId', 'houseIdUpdate']
                    }
                ]
            })
            if (!house) {
                resolve({
                    errCode: 1,
                    errMessage: 'House not found!'
                })
            } else {
                for (var i = 0; i < house.length; i++) {
                    house[i].ownerData.image = Buffer.from(house[i].ownerData.image, 'base64').toString('binary')
                }
                resolve({
                    errCode: 0,
                    errMessage: 'OK',
                    data: house
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let confirmUpdateHouse = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let update = await db.Update_House.findOne({
                where: { houseIdUpdate: inputId },
                raw: false
            })
            if (!update) {
                resolve({
                    errCode: 1,
                    errMessage: 'House not found!'
                })
            } else {
                //Update House
                let updateHouse = await db.House.findOne({
                    where: { id: inputId },
                    raw: false
                })
                let house = await db.House.findOne({
                    where: { id: update.houseId },
                    raw: false
                })
                house.provinceCode = updateHouse.provinceCode;
                house.districtCode = updateHouse.districtCode;
                house.name = updateHouse.name;
                house.title = updateHouse.title;
                house.price = updateHouse.price;
                await house.save();
                //Update House_Info
                let updateHouse_Info = await db.House_Info.findOne({
                    where: { houseId: inputId },
                    raw: false
                })
                let houseInfo = await db.House_Info.findOne({
                    where: { houseId: update.houseId },
                    raw: false
                })
                houseInfo.kindOfHouse = updateHouse_Info.kindOfHouse
                houseInfo.descriptionHTML = updateHouse_Info.descriptionHTML
                houseInfo.descriptionMarkDown = updateHouse_Info.descriptionMarkDown
                houseInfo.address = updateHouse_Info.address
                houseInfo.addressDescription = updateHouse_Info.addressDescription
                houseInfo.location = updateHouse_Info.location
                houseInfo.maxGuests = updateHouse_Info.maxGuests
                houseInfo.allowAnimals = updateHouse_Info.allowAnimals
                houseInfo.countBed = updateHouse_Info.countBed
                houseInfo.countBathRoom = updateHouse_Info.countBathRoom
                await houseInfo.save()
                // Update House_Type
                await db.House_Type.destroy({
                    where: { houseId: update.houseId }
                })
                let updateHouseTypeArray = await db.House_Type.findAll({
                    where: { houseId: update.houseIdUpdate },
                    raw: false
                })
                for (var index = 0; index < updateHouseTypeArray.length; index++) {
                    updateHouseTypeArray[index].houseId = update.houseId
                    await updateHouseTypeArray[index].save()
                }
                // Update House_Convenient
                await db.House_Convenient.destroy({
                    where: { houseId: update.houseId }
                })
                let updateHouseConvenientArray = await db.House_Convenient.findAll({
                    where: { houseId: update.houseIdUpdate },
                    raw: false
                })
                for (var index = 0; index < updateHouseConvenientArray.length; index++) {
                    updateHouseConvenientArray[index].houseId = update.houseId
                    await updateHouseConvenientArray[index].save()
                }
                // Update House_Image
                await db.House_Image.destroy({
                    where: { houseId: update.houseId }
                })
                let updateHouseImageArray = await db.House_Image.findAll({
                    where: { houseId: update.houseIdUpdate },
                    raw: false
                })
                for (var index = 0; index < updateHouseImageArray.length; index++) {
                    updateHouseImageArray[index].houseId = update.houseId
                    await updateHouseImageArray[index].save()
                }

                let emailOwner = await db.User.findOne({
                    where: { id: updateHouse.ownerId },
                    attributes: ['email'],
                    raw: false
                })
                let message = await houseService.deleteHouse(inputId, 2, 'Admin')
                resolve({
                    errCode: 0,
                    errMessage: 'Confirm update success!',
                    emailOwner: emailOwner
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let rejectUpdateHouse = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let house = await db.House.findOne({
                where: { id: inputId },
                raw: false
            })
            if (!house) {
                resolve({
                    errCode: 1,
                    errMessage: 'House not found!'
                })
            } else {
                let emailOwner = await db.User.findOne({
                    where: { id: house.ownerId },
                    attributes: ['email'],
                    raw: false
                })
                let message = await houseService.deleteHouse(inputId, 2, 'Admin')
                resolve({
                    errCode: 0,
                    errMessage: 'Từ chối Update House!',
                    emailOwner: emailOwner.email
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllOwnerHouse = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let ownerHouse = await db.User.findAll({
                where: { role: 'Owner' },
                attributes: {
                    exclude: ['refreshToken', 'resetToken', 'resetTokenExpiration', 'password'],
                },
                raw: false,
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllCustomer = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let ownerHouse = await db.User.findAll({
                where: { role: 'Customer' },
                attributes: {
                    exclude: ['refreshToken', 'resetToken', 'resetTokenExpiration', 'password'],
                },
                raw: false,
            })
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    confirmCreateHouse: confirmCreateHouse,
    getAllHouseWaitCreate: getAllHouseWaitCreate,
    confirmUpdateHouse: confirmUpdateHouse,
    getAllHouseWaitUpdate: getAllHouseWaitUpdate,
    rejectCreateHouse: rejectCreateHouse,
    rejectUpdateHouse: rejectUpdateHouse,
    getAllOwnerHouse: getAllOwnerHouse,
    getAllCustomer: getAllCustomer
}