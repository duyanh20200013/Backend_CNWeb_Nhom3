'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('House_Types', [
            {
                houseId: 1,
                typeId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 2,
                typeId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 2,
                typeId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('House_Types', null, {});
    }
};