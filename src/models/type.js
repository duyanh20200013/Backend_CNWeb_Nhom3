'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Type extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Type.hasMany(models.House_Type, { foreignKey: 'typeId', as: 'typeIdData' })
        }
    };
    Type.init({
        name: DataTypes.STRING,
        linkIcon: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Type',
    });
    return Type;
};