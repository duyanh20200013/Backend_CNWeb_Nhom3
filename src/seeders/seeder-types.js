'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Types', [
            {
                name: "Phòng",
                linkIcon: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Khung cảnh tuyệt vời",
                linkIcon: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Hồ bơi tuyệt vời",
                linkIcon: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Hướng biển",
                linkIcon: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Các thành phố nổi tiếng",
                linkIcon: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Ven hồ",
                linkIcon: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Nhà nhỏ",
                linkIcon: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Biệt thự",
                linkIcon: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Khu cắm trại",
                linkIcon: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Nông trại",
                linkIcon: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Types', null, {});
    }
};