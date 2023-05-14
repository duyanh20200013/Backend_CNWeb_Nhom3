'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Favourite_House extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // static associate(models) {
        // }
    };
    Favourite_House.init({
        name: DataTypes.STRING,
        houseId: DataTypes.INTEGER,
        customerId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Favourite_House',
    });
    return Favourite_House;
};