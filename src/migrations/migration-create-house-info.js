'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('House_Info', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            houseId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            kindOfHouse: {
                type: Sequelize.STRING
            },
            descriptionHTML: {
                allowNull: true,
                type: Sequelize.TEXT('long')
            },
            descriptionMarkDown: {
                allowNull: true,
                type: Sequelize.TEXT('long')
            },
            address: {
                allowNull: false,
                type: Sequelize.STRING
            },
            location: {
                allowNull: false,
                type: Sequelize.GEOMETRY('POINT')
            },
            price: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            maxGuests: {
                type: Sequelize.INTEGER
            },
            allowAnimals: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
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
        await queryInterface.dropTable('House_Info');
    }
};