import e from 'cors';
import db from '../models/index';

// Xử lý Favourite House

let addFavouriteHouse = (name, houseId, customerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let favouriteHouse = await db.Favourite_House.create({
                name: name,
                houseId: houseId,
                customerId: customerId
            })
            resolve({
                errCode: 0,
                errMessage: 'Add favourite Successfully!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllNameListFavourite = (customerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let arrayName = [];
            let listName = await db.Favourite_House.findAll({
                where: { customerId: customerId },
                attributes: ['name'],
                raw: false
            })
            for (var index = 0; index < listName.length; index++) {
                arrayName.push(listName[index].title)
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

let getAllHouseOfOneFavouriteList = (customerId, name) => {
    return new Promise(async (resolve, reject) => {
        try {
            let houses = await db.House.findAll({
                attributes: {
                    exclude: ['provinceCode', 'districtCode'],
                },
                include: [
                    {
                        model: db.Favourite_House,
                        as: 'favouriteHouseData',
                        attributes: [],
                        where: {
                            name: name,
                            customerId: customerId
                        }
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
            if (!house) {
                resolve({
                    errCode: 1,
                    errMessage: 'Favourite_House not found!'
                })
            } else {
                resolve({
                    errCode: 0,
                    errMessage: 'OK!',
                    data: houses
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllFavouriteHouseId = (customerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let arrayName = [];
            let listHouseId = await db.Favourite_House.findAll({
                where: { customerId: customerId },
                attributes: ['houseId'],
                raw: false
            })
            for (var index = 0; index < listHouseId.length; index++) {
                arrayName.push(listHouseId[index].houseId)
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

let deleteOneFavouriteHouse = (houseId, customerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Favourite_House.destroy({
                where: {
                    houseId: houseId,
                    customerId: customerId
                }
            })
            resolve({
                errCode: 0,
                errMessage: 'Delete Successfully!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let deleteFavouriteHouseByName = (name, customerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Favourite_House.destroy({
                where: {
                    name: name,
                    customerId: customerId
                }
            })
            resolve({
                errCode: 0,
                errMessage: 'Delete Successfully!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let updateNameFavouriteList = (name, newName, customerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listHouse = await db.Favourite_House.findAll({
                where: {
                    name: name,
                    customerId: customerId
                },
                raw: false
            })
            if (!listHouse) {
                resolve({
                    errCode: 1,
                    errMessage: 'House not found!'
                })
            } else {
                for (var i = 0; i < listHouse.length; i++) {
                    listHouse[i].name = newName
                    await listHouse[i].save()
                }
                resolve({
                    errCode: 0,
                    errMessage: 'Update Successfully!'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

// Xử lý ...........

module.exports = {
    addFavouriteHouse: addFavouriteHouse,
    getAllNameListFavourite: getAllNameListFavourite,
    getAllHouseOfOneFavouriteList: getAllHouseOfOneFavouriteList,
    getAllFavouriteHouseId: getAllFavouriteHouseId,
    deleteOneFavouriteHouse: deleteOneFavouriteHouse,
    deleteFavouriteHouseByName: deleteFavouriteHouseByName,
    updateNameFavouriteList: updateNameFavouriteList
}