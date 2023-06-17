import db from '../models/index';
const { Op } = require("sequelize");

//Xử lý Verify Owner information

let createVerifyInfomation = (ownerId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Verify_Infomation_Owner.create({
                ownerId: ownerId,
                cardNumber: data.cardNumber,
                accountName: data.accountName,
                bankName: data.bankName,
                CCCDNumber: data.CCCDNumber,
                CCCDfrontImage: data.CCCDfrontImage,
                CCCDbackImage: data.CCCDbackImage
            })
            resolve({
                errCode: 0,
                errMessage: 'Create Successfully!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getVerifyInfomation = (ownerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let verify_infomation = await db.Verify_Infomation_Owner.findOne({
                where: { ownerId: ownerId },
                raw: false
            })
            if (!verify_infomation) {
                resolve({
                    errCode: 1,
                    errMessage: 'Verify Infomation not found!',
                })
            } else {
                resolve({
                    errCode: 0,
                    errMessage: 'OK!',
                    data: verify_infomation
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updateVerifyInfomation = (ownerId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let verify_infomation = await db.Verify_Infomation_Owner.findOne({
                where: { ownerId: ownerId },
                raw: false
            })
            if (!verify_infomation) {
                resolve({
                    errCode: 1,
                    errMessage: 'Verify Infomation not found!',
                })
            } else {
                verify_infomation.cardNumber = data.cardNumber;
                verify_infomation.accountName = data.accountName;
                verify_infomation.bankName = data.bankName;
                verify_infomation.CCCDNumber = data.CCCDNumber;
                verify_infomation.CCCDfrontImage = data.CCCDfrontImage;
                verify_infomation.CCCDbackImage = data.CCCDbackImage;
                await verify_infomation.save();
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

//Xử lý House
let getAllHouseOfOwner = (ownerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let HouseList = await db.House.findAll({
                where: { ownerId: ownerId },
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
            if (HouseList.length !== 0) {
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

//Xử lý Contract
let getAllContractOfHouse = (houseId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let contracts = await db.Contract.findAll({
                where: { houseId: houseId },
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
                            exclude: ['createdAt', 'updatedAt'],
                        },
                    },
                ],
                raw: false,
                nest: true
            })
            if (contracts.length === 0) {
                resolve({
                    errCode: 1,
                    errMessage: 'Not have Contract'
                })
            } else {
                resolve({
                    errCode: 0,
                    errMessage: 'Ok!',
                    data: contracts
                })
            }

        } catch (e) {
            reject(e);
        }
    })
}

let getAllContractOfOwner = (ownerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let listHouseId = []
            let listHouse = await getAllHouseOfOwner(ownerId)
            if (listHouse.data.length !== 0) {
                for (var house of listHouse.data) {
                    listHouseId.push(house.id);
                }
            }
            if (listHouseId.length !== 0) {
                let contracts = await db.Contract.findAll({
                    where: {
                        houseId: {
                            [Op.or]: listHouseId
                        }
                    },
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
                                exclude: ['createdAt', 'updatedAt'],
                            },
                        },
                    ],
                    raw: false,
                    nest: true
                })
                if (contracts.length === 0) {
                    resolve({
                        errCode: 1,
                        errMessage: 'Not have Contract',
                    })
                } else {
                    resolve({
                        errCode: 0,
                        errMessage: 'Ok!',
                        data: contracts
                    })
                }
            } else {
                resolve({
                    errCode: 2,
                    errMessage: 'User not have House',
                    data: []
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}


module.exports = {
    createVerifyInfomation: createVerifyInfomation,
    getVerifyInfomation: getVerifyInfomation,
    updateVerifyInfomation: updateVerifyInfomation,
    getAllHouseOfOwner: getAllHouseOfOwner,
    getAllContractOfHouse: getAllContractOfHouse,
    getAllContractOfOwner: getAllContractOfOwner
}