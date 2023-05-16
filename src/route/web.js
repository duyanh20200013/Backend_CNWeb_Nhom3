import express from "express";
import houseController from '../controllers/houseController'
import userController from '../controllers/userController'
import amdinController from '../controllers/adminController'
const { authToken, authRole } = require("../middlewares/is-auth");

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/api/alltype', houseController.getAllTypes);
    router.get('/api/all-house-of-type', houseController.getAllHouseOfType);
    router.get('/api/allconvenient', houseController.getAllConvenients);
    router.get('/api/get-house-by-id', houseController.getDetailHouseById)
    router.post('/api/search-house', houseController.searchHouse)

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

    return app.use("/", router)
}

module.exports = initWebRoutes;