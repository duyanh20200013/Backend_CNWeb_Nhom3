'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Houses', [
            {
                provinceCode: 10,
                districtCode: 83,
                ownerId: 1,
                status: 'Active',
                name: 'Bungalow với tầm nhìn thung lũng 4 tuyệt đẹp tại HappyHill',
                title: 'Hướng núi',
                price: 34,
                star: 5.0,
                countReview: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                provinceCode: 10,
                districtCode: 83,
                ownerId: 1,
                status: 'Active',
                name: 'Sin Suoi Ho Bungalow và Homestay',
                title: 'Gần hồ',
                price: 30,
                star: 5.0,
                countReview: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Houses', null, {});
    }
};