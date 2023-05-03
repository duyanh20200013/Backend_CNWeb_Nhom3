'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class House_Convenient extends Model {
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
    House_Convenient.init({
        houseId: DataTypes.INTEGER,
        convenientId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'House_Convenient',
    });
    return House_Convenient;
};