'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class House extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            House.belongsTo(models.District, { foreignKey: 'districtCode', targetKey: 'code', as: 'districtData' })
            House.belongsTo(models.Province, { foreignKey: 'provinceCode', targetKey: 'code', as: 'provinceData' })
            House.belongsTo(models.User, { foreignKey: 'ownerId', targetKey: 'id', as: 'ownerData' })
            House.hasMany(models.House_Image, { foreignKey: 'houseId', as: 'houseImageIdData' })
            House.hasMany(models.House_Type, { foreignKey: 'houseId', as: 'houseTypeIdData' })
            House.hasMany(models.House_Convenient, { foreignKey: 'houseId', as: 'houseConvenientIdData' })
            House.hasMany(models.Favourite_House, { foreignKey: 'houseId', as: 'favouriteHouseData' })
            House.hasMany(models.Contract, { foreignKey: 'houseId', as: 'houseContractData' })
            House.hasMany(models.Review, { foreignKey: 'houseId', as: 'houseReviewData' })
            House.hasOne(models.House_Info, { foreignKey: 'houseId' })
            House.hasOne(models.Update_House, { foreignKey: 'houseIdUpdate' })
        }
    };
    House.init({
        provinceCode: DataTypes.INTEGER,
        districtCode: DataTypes.INTEGER,
        ownerId: DataTypes.INTEGER,
        status: DataTypes.STRING,
        name: DataTypes.STRING,
        title: DataTypes.STRING,
        price: DataTypes.INTEGER,
        star: DataTypes.FLOAT,
        countReview: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'House',
    });
    return House;
};