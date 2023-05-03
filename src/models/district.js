'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class District extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            District.belongsTo(models.Province, { foreignKey: 'provinceCode', targetKey: 'code', as: 'provinceCodeData' })
            District.hasMany(models.House, { foreignKey: 'districtCode', as: 'districtData' })
        }
    };
    District.init({
        code: DataTypes.INTEGER,
        name: DataTypes.STRING,
        divisionType: DataTypes.STRING,
        codename: DataTypes.STRING,
        provinceCode: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'District',
    });
    return District;
};