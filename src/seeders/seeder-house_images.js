'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('House_Images', [
            {
                houseId: 1,
                url: 'https://a0.muscache.com/im/pictures/miso/Hosting-818483900129780576/original/262a4f7e-b83f-455c-83be-d250afb2abb0.jpeg?im_w=1200',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 1,
                url: 'https://a0.muscache.com/im/pictures/miso/Hosting-818483900129780576/original/8d826e82-9764-4782-82cc-bc02764b3d4b.jpeg?im_w=720',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 1,
                url: 'https://a0.muscache.com/im/pictures/miso/Hosting-818483900129780576/original/0a6b22de-0ee6-46fe-abc4-322b2d9e98b8.jpeg?im_w=720',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 1,
                url: 'https://a0.muscache.com/im/pictures/miso/Hosting-818483900129780576/original/a862f6a3-e7ed-4c05-988b-0a75efd80be8.jpeg?im_w=720',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 1,
                url: 'https://a0.muscache.com/im/pictures/miso/Hosting-818483900129780576/original/100a8caa-d04e-41a4-ba83-efbfbeba999c.jpeg?im_w=720',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 2,
                url: 'https://a0.muscache.com/im/pictures/0d9537f4-2543-41a1-944c-cf610f4a1ecf.jpg?im_w=1200',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 2,
                url: 'https://a0.muscache.com/im/pictures/52b4bd64-37e5-4b36-89c3-95599918065d.jpg?im_w=720',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 2,
                url: 'https://a0.muscache.com/im/pictures/9b14fbb6-20d2-4e54-a46b-d85aecd48c78.jpg?im_w=720',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 2,
                url: 'https://a0.muscache.com/im/pictures/d9ec6201-1d34-4d82-bd5b-91989e4fcf27.jpg?im_w=720',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 2,
                url: 'https://a0.muscache.com/im/pictures/f2b8a8ff-5595-445a-b08a-5633149a8698.jpg?im_w=720',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('House_Images', null, {});
    }
};