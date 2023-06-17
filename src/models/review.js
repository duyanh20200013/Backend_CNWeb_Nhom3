'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Review.belongsTo(models.Contract, { foreignKey: 'contractId', targetKey: 'id', as: 'ReviewData' })
            Review.belongsTo(models.House, { foreignKey: 'houseId', targetKey: 'id', as: 'houseReviewData' })
            Review.belongsTo(models.User, { foreignKey: 'customerId', targetKey: 'id', as: 'userReviewData' })
        }
    };
    Review.init({
        customerId: DataTypes.INTEGER,
        houseId: DataTypes.INTEGER,
        contractId: DataTypes.INTEGER,
        star: DataTypes.INTEGER,
        description: DataTypes.TEXT('long'),
    }, {
        sequelize,
        modelName: 'Review',
    });
    return Review;
};