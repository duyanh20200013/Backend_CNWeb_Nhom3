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
            //House.hasMany(models.Province, { foreignKey: 'provinceId', targetKey: 'id', as: 'provinceData' })
        }
    };
    House.init({
        provinceCode: DataTypes.INTEGER,
        districtCode: DataTypes.INTEGER,
        ownerId: DataTypes.INTEGER,
        status: DataTypes.STRING,
        name: DataTypes.STRING,
        title: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'House',
    });
    return House;
};