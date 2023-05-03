'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            gender: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.BLOB('long')
            },
            role: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            refreshToken: {
                type: Sequelize.STRING
            },
            resetToken: {
                type: Sequelize.STRING
            },
            resetTokenExpiration: {
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
        await queryInterface.dropTable('Users');
    }
};