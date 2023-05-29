import db from '../models/index';

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

module.exports = {
    createVerifyInfomation: createVerifyInfomation,
    getVerifyInfomation: getVerifyInfomation,
    updateVerifyInfomation: updateVerifyInfomation
}