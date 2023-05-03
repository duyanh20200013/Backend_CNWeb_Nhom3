'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Info_Guest_Contract extends Model {
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
    Info_Guest_Contract.init({
        contractId: DataTypes.INTEGER,
        numberOver13: DataTypes.INTEGER,
        numberUnder13: DataTypes.INTEGER,
        numberChildren: DataTypes.INTEGER,
        haveAnimals: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Info_Guest_Contract',
    });
    return Info_Guest_Contract;
};