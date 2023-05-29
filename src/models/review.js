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
            //District.hasMany(models.House, { foreignKey: 'districtCode', as: 'districtData' })
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