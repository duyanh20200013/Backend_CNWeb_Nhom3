'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class House_Info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // static associate(models) {
        //     District.belongsTo(models.Province, { foreignKey: 'provinceCode', targetKey: 'code', as: 'provinceCodeData' })
        //     District.hasMany(models.House, { foreignKey: 'districtCode', as: 'districtData' })
        // }
    };
    House_Info.init({
        houseId: DataTypes.INTEGER,
        kindOfHouse: DataTypes.STRING,
        descriptionHTML: DataTypes.TEXT('long'),
        descriptionMarkDown: DataTypes.TEXT('long'),
        address: DataTypes.STRING,
        location: DataTypes.GEOMETRY('POINT'),
        price: DataTypes.INTEGER,
        maxGuests: DataTypes.INTEGER,
        allowAnimals: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'House_Info',
    });
    return House_Info;
};