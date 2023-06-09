'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.hasMany(models.House, { foreignKey: 'ownerId', targetKey: 'id', as: 'ownerData' })
            User.hasMany(models.Contract, { foreignKey: 'customerId', as: 'customerContractData' })
            User.hasOne(models.Verify_Infomation_Owner, { foreignKey: 'ownerId' })
            User.hasMany(models.Review, { foreignKey: 'customerId', as: 'userReviewData' })
        }
    };
    User.init({
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        gender: DataTypes.STRING,
        image: DataTypes.BLOB('long'),
        role: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        refreshToken: DataTypes.STRING,
        resetToken: DataTypes.STRING,
        resetTokenExpiration: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};