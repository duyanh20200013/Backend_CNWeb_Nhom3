'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Verify_Infomation_Owners', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ownerId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            cardNumber: {
                allowNull: false,
                type: Sequelize.STRING
            },
            accountName: {
                allowNull: false,
                type: Sequelize.STRING
            },
            bankName: {
                allowNull: false,
                type: Sequelize.STRING
            },
            CCCDNumber: {
                allowNull: false,
                type: Sequelize.STRING
            },
            CCCDfrontImage: {
                type: Sequelize.BLOB('long')
            },
            CCCDbackImage: {
                type: Sequelize.BLOB('long')
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
        await queryInterface.dropTable('Verify_Infomation_Owners');
    }
};