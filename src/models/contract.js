'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Contract extends Model {
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
    Contract.init({
        customerId: DataTypes.INTEGER,
        houseId: DataTypes.INTEGER,
        arriveDate: DataTypes.DATE,
        leftDate: DataTypes.DATE,
        price: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Contract',
    });
    return Contract;
};