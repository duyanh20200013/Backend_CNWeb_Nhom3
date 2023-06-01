'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Contracts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            customerId: {
                type: Sequelize.INTEGER
            },
            houseId: {
                type: Sequelize.INTEGER
            },
            arriveDate: {
                allowNull: false,
                type: Sequelize.DATEONLY
            },
            leftDate: {
                allowNull: false,
                type: Sequelize.DATEONLY
            },
            price: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            numberOver13: {
                type: Sequelize.INTEGER
            },
            numberUnder13: {
                type: Sequelize.INTEGER
            },
            numberChildren: {
                type: Sequelize.INTEGER
            },
            haveAnimals: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            status: {
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
        await queryInterface.dropTable('Contracts');
    }
};