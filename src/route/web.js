import express from "express";
import houseController from '../controllers/houseController'
import userController from '../controllers/userController'
import amdinController from '../controllers/adminController'
import customerController from '../controllers/customerController'
import ownerController from '../controllers/ownerController'
const { authToken, authRole } = require("../middlewares/is-auth");

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/api/all-province', houseController.getAllProvince);
    router.get('/api/all-district-of-province', houseController.getAllDistrictOfProvince);
    router.get('/api/alltype', houseController.getAllTypes);
    router.get('/api/all-house-of-type', houseController.getAllHouseOfType);
    router.get('/api/allconvenient', houseController.getAllConvenients);
    router.get('/api/all-type-convenients', houseController.getAllTypeConvenients);
    router.get('/api/get-all-house-active', houseController.getAllHouseActive);
    router.get('/api/get-house-by-id', houseController.getDetailHouseById);
    router.post('/api/search-house', houseController.searchHouse);

    router.post('/api/register', userController.handleCreateNewUser);
    router.post('/api/login', userController.handleLogin);
    router.post('/api/auth-token', userController.generateToken);
    router.post('/logout', authToken, userController.handleLogout);
    router.post('/auth/reset-password', userController.resetPassword);
    router.put('/auth/update-password', userController.handleChangePassword);
    router.post('/api/update-profile', authToken, userController.updateprofile);

    router.post('/api/create-house', authToken, authRole(["Owner"]), houseController.createHouse)
    router.get('/api/delete-house', authToken, authRole(["Admin", "Owner"]), houseController.deleteHouse)
    router.post('/api/update-house', authToken, authRole(["Owner"]), houseController.updateHouse)

    router.post('/api/confirm-create-house', authToken, authRole(["Admin"]), amdinController.confirmCreateHouse)
    router.post('/api/confirm-update-house', authToken, authRole(["Admin"]), amdinController.confirmUpdateHouse)
    router.get('/api/reject-create-house', authToken, authRole(["Admin"]), amdinController.rejectCreateHouse)
    router.get('/api/reject-update-house', authToken, authRole(["Admin"]), amdinController.rejectUpdateHouse)
    router.get('/api/get-all-create-house', authToken, authRole(["Admin"]), amdinController.getAllHouseWaitCreate)
    router.get('/api/get-all-update-house', authToken, authRole(["Admin"]), amdinController.getAllHouseWaitUpdate)
    //Xử lý Contract
    router.get('/api/partial-payment-contract', authToken, authRole(["Admin"]), amdinController.partialPaymentContract)
    router.get('/api/full-payment-contract', authToken, authRole(["Admin"]), amdinController.fullPaymentContract)
    router.post('/api/cancel-contract', authToken, authRole(["Admin", "Owner", "Customer"]), amdinController.cancelContract)
    router.post('/api/refund-contract', authToken, authRole(["Admin", "Owner", "Customer"]), amdinController.refundContract)

    router.get('/api/get-all-owner', authToken, authRole(["Admin"]), amdinController.getAllOwnerHouse)
    router.get('/api/get-all-customer', authToken, authRole(["Admin"]), amdinController.getAllCustomer)
    router.get('/api/get-all-user', authToken, authRole(["Admin"]), amdinController.getAllUser)

    router.post('/api/create-favourite-house', authToken, authRole(["Customer"]), customerController.addFavouriteHouse)
    router.get('/api/get-all-name-favouriteList', authToken, authRole(["Customer"]), customerController.getAllNameListFavourite)
    router.post('/api/get-all-house-of-one-favourite-list', authToken, authRole(["Customer"]), customerController.getAllHouseOfOneFavouriteList)
    router.get('/api/get-all-favourite-house-id', authToken, authRole(["Customer"]), customerController.getAllFavouriteHouseId)
    router.post('/api/delete-favourite-house-by-id', authToken, authRole(["Customer"]), customerController.deleteOneFavouriteHouse)
    router.post('/api/delete-favourite-house-by-name', authToken, authRole(["Customer"]), customerController.deleteFavouriteHouseByName)
    router.post('/api/update-name-favourite-list', authToken, authRole(["Customer"]), customerController.updateNameFavouriteList)

    router.post('/api/create-contract', authToken, authRole(["Customer"]), customerController.createContract)
    router.get('/api/get-all-contract-of-customer', authToken, authRole(["Admin", "Customer"]), customerController.getAllContractOfCustomer)
    router.get('/api/get-contract-by-id', authToken, authRole(["Admin", "Customer", "Owner"]), customerController.getDatailContract)
    router.get('/api/end-contract', authToken, authRole(["Customer"]), customerController.endContract)

    router.post('/api/create-review', authToken, authRole(["Customer"]), customerController.createReview)

    router.get('/api/get-all-house-of-owner', ownerController.getAllHouseOfOwner)
    router.get('/api/get-all-contract-of-house', authToken, authRole(["Admin", "Owner"]), ownerController.getAllContractOfHouse)
    router.get('/api/get-all-contract-of-owner', authToken, authRole(["Admin", "Owner"]), ownerController.getAllContractOfOwner)

    router.post('/api/create-verify-infomation', authToken, authRole(["Owner"]), ownerController.createVerifyInfomation)
    router.post('/api/update-verify-infomation', authToken, authRole(["Owner"]), ownerController.updateVerifyInfomation)
    router.get('/api/get-verify-infomation', authToken, authRole(["Admin", "Owner"]), ownerController.getVerifyInfomation)


    return app.use("/", router)
}

module.exports = initWebRoutes;