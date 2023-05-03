'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('House', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            provinceCode: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            districtCode: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            ownerId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            status: {
                allowNull: false,
                type: Sequelize.STRING
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('House');
    }
};