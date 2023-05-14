'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Update_House extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Update_House.belongsTo(models.House, { foreignKey: 'houseIdUpdate' })
        }
    };
    Update_House.init({
        houseIdUpdate: DataTypes.INTEGER,
        houseId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Update_House',
    });
    return Update_House;
};