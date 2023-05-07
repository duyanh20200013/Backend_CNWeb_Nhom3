'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Guest_info_contracts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            contractId: {
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
                type: Sequelize.BOOLEAN
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
        await queryInterface.dropTable('Guest_info_contracts');
    }
};