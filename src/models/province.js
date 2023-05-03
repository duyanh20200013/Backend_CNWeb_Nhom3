'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Province extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Province.hasMany(models.District, { foreignKey: 'provinceCode', as: 'provinceCodeData' })
            Province.hasMany(models.House, { foreignKey: 'provinceCode', as: 'provinceData' })
        }
    };
    Province.init({
        code: DataTypes.INTEGER,
        name: DataTypes.STRING,
        divisionType: DataTypes.STRING,
        codename: DataTypes.STRING,
        phoneCode: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Province',
    });
    return Province;
};