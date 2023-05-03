'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Contract', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            customerId: {
                type: Sequelize.INTEGER
            },
            arriveDate: {
                allowNull: false,
                type: Sequelize.DATE
            },
            leftDate: {
                allowNull: false,
                type: Sequelize.DATE
            },
            infoGuestId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            price: {
                allowNull: false,
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('Contract');
    }
};