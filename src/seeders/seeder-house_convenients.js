'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('House_Convenients', [
            {
                houseId: 1,
                convenientId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 1,
                convenientId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 1,
                convenientId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 1,
                convenientId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 1,
                convenientId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 1,
                convenientId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 2,
                convenientId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 2,
                convenientId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 2,
                convenientId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 2,
                convenientId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('House_Convenients', null, {});
    }
};