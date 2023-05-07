'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Convenients', [
            {
                typeConvenient: 'Đồ dùng thiết yếu',
                name: 'Wi-fi',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {

                typeConvenient: 'Đồ dùng thiết yếu',
                name: 'Bếp',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'Đồ dùng thiết yếu',
                name: 'Máy giặt',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'Đồ dùng thiết yếu',
                name: 'Điều hoà nhiệt độ',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'Đồ dùng thiết yếu',
                name: 'Máy sấy tóc',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'Đồ dùng thiết yếu',
                name: 'TV',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'Đồ dùng thiết yếu',
                name: 'Bàn là',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'Đồ dùng thiết yếu',
                name: 'Hệ thống sưởi',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'Đặc điểm',
                name: 'Bể bơi',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'Đặc điểm',
                name: 'Bồn tắm nước nóng',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'Đặc điểm',
                name: 'Chỗ để xe miễn phí tại nơi ở',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'Đặc điểm',
                name: 'Lò nướng BBQ',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'Đặc điểm',
                name: 'Cũi',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'Đặc điểm',
                name: 'Cho phép hút thuốc',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'Vị trí',
                name: 'Hướng biển',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'Vị trí',
                name: 'Ven sông/hồ/biển',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'An toàn',
                name: 'Máy báo khói',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                typeConvenient: 'An toàn',
                name: 'Máy phát hiện khí CO',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Convenients', null, {});
    }
};