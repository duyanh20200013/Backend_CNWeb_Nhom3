import express from "express";
import houseController from '../controllers/houseController'
import userController from '../controllers/userController'
const { authToken } = require("../middlewares/is-auth");

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/api/alltype', houseController.getAllTypes);
    router.get('/api/all-house-of-type', houseController.getAllHouseOfType);
    router.get('/api/allconvenient', houseController.getAllConvenients);
    router.get('/api/get-house-by-id', houseController.getDetailHouseById)

    router.post('/api/register', userController.handleCreateNewUser);
    router.post('/api/login', userController.handleLogin);
    router.post('/api/auth-token', userController.generateToken);
    router.post('/logout', authToken, userController.handleLogout);
    router.post('/auth/reset-password', userController.resetPassword);
    router.put('/auth/update-password', userController.handleChangePassword);
    router.post('/api/update-profile', authToken, userController.updateprofile);

    return app.use("/", router)
}

module.exports = initWebRoutes;