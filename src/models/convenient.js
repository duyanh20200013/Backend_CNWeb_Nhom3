'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Convenient extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Convenient.hasMany(models.House_Convenient, { foreignKey: 'convenientId', as: 'convenientData' })
        }
    };
    Convenient.init({
        typeConvenient: DataTypes.STRING,
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Convenient',
    });
    return Convenient;
};