'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('House_Infos', [
            {
                houseId: 1,
                kindOfHouse: 'Nhà',
                descriptionHTML: null,
                descriptionMarkDown: null,
                address: 'Nậm Cang,Lào Cai',
                location: null,
                maxGuests: 5,
                allowAnimals: true,
                countBed: 3,
                countBathRoom: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                houseId: 2,
                kindOfHouse: 'Nhà khách',
                descriptionHTML: null,
                descriptionMarkDown: null,
                address: 'Bản Lác, Lào Cai',
                location: null,
                maxGuests: 4,
                allowAnimals: false,
                countBed: 2,
                countBathRoom: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('House_Infos', null, {});
    }
};