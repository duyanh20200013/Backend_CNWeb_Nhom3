'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class House_Type extends Model {
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
    House_Type.init({
        houseId: DataTypes.INTEGER,
        typeId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'House_Type',
    });
    return House_Type;
};