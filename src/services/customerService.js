import db from '../models/index';
import houseService from './houseService'

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
            for (let name of listName) {
                arrayName.push(name.name)
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
            if (!houses) {
                resolve({
                    errCode: 1,
                    errMessage: 'Favourite_House not found!'
                })
            } else {
                for (let house of houses) {
                    house.ownerData.image = Buffer.from(house.ownerData.image, 'base64').toString('binary')
                }
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

// Xử lý Contract
let createContract = (customerId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Contract.create({
                customerId: customerId,
                houseId: data.houseId,
                arriveDate: data.arriveDate,
                leftDate: data.leftDate,
                price: data.price,
                numberOver13: data.numberOver13,
                numberUnder13: data.numberUnder13,
                numberChildren: data.numberChildren,
                haveAnimals: data.haveAnimals,
                status: 'Đang chờ xác nhận'
            })
            resolve({
                errCode: 0,
                errMessage: 'Create Contract Successfully!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllContractOfCustomer = (customerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let contracts = await db.Contract.findAll({
                where: { customerId: customerId },
                include: [
                    {
                        model: db.Review,
                        as: 'ReviewData',
                        attributes: ['star', 'description'],
                    },
                    {
                        model: db.House,
                        as: 'houseContractData',
                        attributes: {
                            exclude: ['ownerId', 'createdAt', 'updatedAt'],
                        },
                    },
                ],
                raw: false,
                nest: true
            })
            resolve({
                errCode: 0,
                errMessage: 'Ok!',
                data: contracts
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getDatailContract = (contractId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let contract = await db.Contract.findOne({
                where: { id: contractId },
                include: [
                    {
                        model: db.Review,
                        as: 'ReviewData',
                        attributes: ['star', 'description'],
                    },
                    {
                        model: db.User,
                        as: 'customerContractData',
                        attributes: ['firstName', 'lastName', 'image', 'address', 'phone', 'email'],
                    },
                ],
                raw: false,
                nest: true
            })
            if (contract) {
                contract.customerContractData.image = Buffer.from(contract.customerContractData.image, 'base64').toString('binary')
                let house = await houseService.getDetailHouseById(contract.houseId);
                resolve({
                    errCode: 0,
                    errMessage: 'Ok!',
                    contract: contract,
                    house: house
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'Contract not found'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let endContract = (contractId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let contract = await db.Contract.findOne({
                where: { id: contractId },
                raw: false,
            })
            contract.status = 'Hoàn thành'
            await contract.save();
            resolve({
                errCode: 0,
                errMessage: 'Ok!',
                contract: contract
            })
        } catch (e) {
            reject(e);
        }
    })
}

//Xử lý Review
let createReview = (customerId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Review.create({
                customerId: customerId,
                houseId: data.houseId,
                contractId: data.contractId,
                star: data.star,
                description: data.description,
            })
            let house = await db.House.findOne({
                where: { id: data.houseId },
                raw: false
            })
            //Cập nhật star và countReview
            let star = house.star;
            house.countReview = house.countReview + 1;
            house.star = (star + data.star) / (house.countReview);
            await house.save();
            resolve({
                errCode: 0,
                errMessage: 'Create Review Successfully!'
            })
        } catch (e) {
            reject(e);
        }
    })
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
    getAllContractOfCustomer: getAllContractOfCustomer,
    getDatailContract: getDatailContract,
    endContract: endContract,
    createReview: createReview
}