'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Verify_Infomation_Owner extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Verify_Infomation_Owner.belongsTo(models.User, { foreignKey: 'ownerId' })
        }
    };
    Verify_Infomation_Owner.init({
        ownerId: DataTypes.INTEGER,
        cardNumber: DataTypes.STRING,
        accountName: DataTypes.STRING,
        bankName: DataTypes.STRING,
        CCCDNumber: DataTypes.STRING,
        CCCDfrontImage: DataTypes.BLOB('long'),
        CCCDbackImage: DataTypes.BLOB('long'),
    }, {
        sequelize,
        modelName: 'Verify_Infomation_Owner',
    });
    return Verify_Infomation_Owner;
};