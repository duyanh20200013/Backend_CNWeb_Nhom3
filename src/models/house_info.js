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
        static associate(models) {
            House_Info.belongsTo(models.House, { foreignKey: 'houseId' })
        }
    };
    House_Info.init({
        houseId: DataTypes.INTEGER,
        kindOfHouse: DataTypes.STRING,
        descriptionHTML: DataTypes.TEXT('long'),
        descriptionMarkDown: DataTypes.TEXT('long'),
        address: DataTypes.STRING,
        location: DataTypes.GEOMETRY('POINT'),
        maxGuests: DataTypes.INTEGER,
        allowAnimals: DataTypes.BOOLEAN,
        countBed: DataTypes.INTEGER,
        countBathRoom: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'House_Info',
    });
    return House_Info;
};