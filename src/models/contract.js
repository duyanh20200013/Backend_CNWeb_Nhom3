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
        static associate(models) {
            Contract.belongsTo(models.House, { foreignKey: 'houseId', targetKey: 'id', as: 'houseContractData' })
            Contract.belongsTo(models.User, { foreignKey: 'customerId', targetKey: 'id', as: 'customerContractData' })
            Contract.hasMany(models.House, { foreignKey: 'contractId', as: 'ReviewData' })
        }
    };
    Contract.init({
        customerId: DataTypes.INTEGER,
        houseId: DataTypes.INTEGER,
        arriveDate: DataTypes.DATE,
        leftDate: DataTypes.DATE,
        price: DataTypes.INTEGER,
        numberOver13: DataTypes.INTEGER,
        numberUnder13: DataTypes.INTEGER,
        numberChildren: DataTypes.INTEGER,
        haveAnimals: DataTypes.BOOLEAN,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Contract',
    });
    return Contract;
};