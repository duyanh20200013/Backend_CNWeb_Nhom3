import express from "express";
import houseController from '../controllers/houseController'
import userController from '../controllers/userController'

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/api/alltype', houseController.getAllTypes);
    router.get('/api/all-house-of-type', houseController.getAllHouseOfType);
    router.get('/api/allconvenient', houseController.getAllConvenients);
    router.get('/api/get-house-by-id', houseController.getDetailHouseById)

    router.post('/api/register', userController.handleCreateNewUser);



    return app.use("/", router)
}

module.exports = initWebRoutes;