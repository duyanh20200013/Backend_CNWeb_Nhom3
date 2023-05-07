'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class House_Image extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            House_Image.belongsTo(models.House, { foreignKey: 'houseId', targetKey: 'id', as: 'houseImageIdData' })
        }
    };
    House_Image.init({
        houseId: DataTypes.INTEGER,
        url: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'House_Image',
    });
    return House_Image;
};