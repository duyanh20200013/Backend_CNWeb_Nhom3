'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class House_Type extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            House_Type.belongsTo(models.House, { foreignKey: 'houseId', targetKey: 'id', as: 'houseTypeIdData' })
            House_Type.belongsTo(models.Type, { foreignKey: 'typeId', targetKey: 'id', as: 'typeIdData' })
        }
    };
    House_Type.init({
        houseId: DataTypes.INTEGER,
        typeId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'House_Type',
    });
    return House_Type;
};