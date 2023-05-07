'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Provinces', [{
            code: 1,
            name: 'Thành phố Hà Nội',
            divisionType: 'thành phố trung ương',
            codename: 'thanh_pho_ha_noi',
            phoneCode: 24,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 2,
            name: 'Tỉnh Hà Giang',
            divisionType: 'tỉnh',
            codename: 'tinh_ha_giang',
            phoneCode: 219,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 4,
            name: 'Tỉnh Cao Bằng',
            divisionType: 'tỉnh',
            codename: 'tinh_cao_bang',
            phoneCode: 206,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 6,
            name: 'Tỉnh Bắc Kạn',
            divisionType: 'tỉnh',
            codename: 'tinh_bac_kan',
            phoneCode: 209,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 8,
            name: 'Tỉnh Tuyên Quang',
            divisionType: 'tỉnh',
            codename: 'tinh_tuyen_quang',
            phoneCode: 207,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 10,
            name: 'Tỉnh Lào Cai',
            divisionType: 'tỉnh',
            codename: 'tinh_lao_cai',
            phoneCode: 214,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 11,
            name: 'Tỉnh Điện Biên',
            divisionType: 'tỉnh',
            codename: 'tinh_dien_bien',
            phoneCode: 215,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 12,
            name: 'Tỉnh Lai Châu',
            divisionType: 'tỉnh',
            codename: 'tinh_lai_chau',
            phoneCode: 213,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 14,
            name: 'Tỉnh Sơn La',
            divisionType: 'tỉnh',
            codename: 'tinh_son_la',
            phoneCode: 212,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 15,
            name: 'Tỉnh Yên Bái',
            divisionType: 'tỉnh',
            codename: 'tinh_yen_bai',
            phoneCode: 216,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 17,
            name: 'Tỉnh Hoà Bình',
            divisionType: 'tỉnh',
            codename: 'tinh_hoa_binh',
            phoneCode: 218,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 19,
            name: 'Tỉnh Thái Nguyên',
            divisionType: 'tỉnh',
            codename: 'tinh_thai_nguyen',
            phoneCode: 208,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 20,
            name: 'Tỉnh Lạng Sơn',
            divisionType: 'tỉnh',
            codename: 'tinh_lang_son',
            phoneCode: 205,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 22,
            name: 'Tỉnh Quảng Ninh',
            divisionType: 'tỉnh',
            codename: 'tinh_quang_ninh',
            phoneCode: 203,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 24,
            name: 'Tỉnh Bắc Giang',
            divisionType: 'tỉnh',
            codename: 'tinh_bac_giang',
            phoneCode: 204,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 25,
            name: 'Tỉnh Phú Thọ',
            divisionType: 'tỉnh',
            codename: 'tinh_phu_tho',
            phoneCode: 210,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 26,
            name: 'Tỉnh Vĩnh Phúc',
            divisionType: 'tỉnh',
            codename: 'tinh_vinh_phuc',
            phoneCode: 211,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 27,
            name: 'Tỉnh Bắc Ninh',
            divisionType: 'tỉnh',
            codename: 'tinh_bac_ninh',
            phoneCode: 222,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 30,
            name: 'Tỉnh Hải Dương',
            divisionType: 'tỉnh',
            codename: 'tinh_hai_duong',
            phoneCode: 220,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 31,
            name: 'Thành Phố Hải Phòng',
            divisionType: 'thành phố trung ương',
            codename: 'thanh_pho_hai_phong',
            phoneCode: 225,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 33,
            name: 'Tỉnh Hưng Yên',
            divisionType: 'tỉnh',
            codename: 'tinh_hung_yen',
            phoneCode: 221,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 34,
            name: 'Tỉnh Thái Bình',
            divisionType: 'tỉnh',
            codename: 'tinh_thai_binh',
            phoneCode: 227,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 35,
            name: 'Tỉnh Hà Nam',
            divisionType: 'tỉnh',
            codename: 'tinh_ha_nam',
            phoneCode: 226,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 36,
            name: 'Tỉnh Nam Định',
            divisionType: 'tỉnh',
            codename: 'tinh_nam_dinh',
            phoneCode: 228,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 37,
            name: 'Tỉnh Ninh Bình',
            divisionType: 'tỉnh',
            codename: 'tinh_ninh_binh',
            phoneCode: 229,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 38,
            name: 'Tỉnh Thanh Hoá',
            divisionType: 'tỉnh',
            codename: 'tinh_thanh_hoa',
            phoneCode: 237,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            code: 40,
            name: 'Tỉnh Nghệ An',
            divisionType: 'tỉnh',
            codename: 'tinh_nghe_an',
            phoneCode: 238,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Hà Tĩnh",
            code: 42,
            divisionType: "tỉnh",
            codename: "tinh_ha_tinh",
            phoneCode: 239,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Quảng Bình",
            code: 44,
            divisionType: "tỉnh",
            codename: "tinh_quang_binh",
            phoneCode: 232,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Quảng Trị",
            code: 45,
            divisionType: "tỉnh",
            codename: "tinh_quang_tri",
            phoneCode: 233,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Thừa Thiên Huế",
            code: 46,
            divisionType: "tỉnh",
            codename: "tinh_thua_thien_hue",
            phoneCode: 234,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Đà Nẵng",
            code: 48,
            divisionType: "thành phố trung ương",
            codename: "thanh_pho_da_nang",
            phoneCode: 236,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Quảng Nam",
            code: 49,
            divisionType: "tỉnh",
            codename: "tinh_quang_nam",
            phoneCode: 235,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Quảng Ngãi",
            code: 51,
            divisionType: "tỉnh",
            codename: "tinh_quang_ngai",
            phoneCode: 255,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Bình Định",
            code: 52,
            divisionType: "tỉnh",
            codename: "tinh_binh_dinh",
            phoneCode: 256,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Phú Yên",
            code: 54,
            divisionType: "tỉnh",
            codename: "tinh_phu_yen",
            phoneCode: 257,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Khánh Hòa",
            code: 56,
            divisionType: "tỉnh",
            codename: "tinh_khanh_hoa",
            phoneCode: 258,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Ninh Thuận",
            code: 58,
            divisionType: "tỉnh",
            codename: "tinh_ninh_thuan",
            phoneCode: 259,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Bình Thuận",
            code: 60,
            divisionType: "tỉnh",
            codename: "tinh_binh_thuan",
            phoneCode: 252,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Kon Tum",
            code: 62,
            divisionType: "tỉnh",
            codename: "tinh_kon_tum",
            phoneCode: 260,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Gia Lai",
            code: 64,
            divisionType: "tỉnh",
            codename: "tinh_gia_lai",
            phoneCode: 269,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Đắk Lắk",
            code: 66,
            divisionType: "tỉnh",
            codename: "tinh_dak_lak",
            phoneCode: 262,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Đắk Nông",
            code: 67,
            divisionType: "tỉnh",
            codename: "tinh_dak_nong",
            phoneCode: 261,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Lâm Đồng",
            code: 68,
            divisionType: "tỉnh",
            codename: "tinh_lam_dong",
            phoneCode: 263,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Bình Phước",
            code: 70,
            divisionType: "tỉnh",
            codename: "tinh_binh_phuoc",
            phoneCode: 271,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Tây Ninh",
            code: 72,
            divisionType: "tỉnh",
            codename: "tinh_tay_ninh",
            phoneCode: 276,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Bình Dương",
            code: 74,
            divisionType: "tỉnh",
            codename: "tinh_binh_duong",
            phoneCode: 274,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Đồng Nai",
            code: 75,
            divisionType: "tỉnh",
            codename: "tinh_dong_nai",
            phoneCode: 251,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Bà Rịa - Vũng Tàu",
            code: 77,
            divisionType: "tỉnh",
            codename: "tinh_ba_ria_vung_tau",
            phoneCode: 254,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Hồ Chí Minh",
            code: 79,
            divisionType: "thành phố trung ương",
            codename: "thanh_pho_ho_chi_minh",
            phoneCode: 28,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Long An",
            code: 80,
            divisionType: "tỉnh",
            codename: "tinh_long_an",
            phoneCode: 272,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Tiền Giang",
            code: 82,
            divisionType: "tỉnh",
            codename: "tinh_tien_giang",
            phoneCode: 273,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Bến Tre",
            code: 83,
            divisionType: "tỉnh",
            codename: "tinh_ben_tre",
            phoneCode: 275,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Trà Vinh",
            code: 84,
            divisionType: "tỉnh",
            codename: "tinh_tra_vinh",
            phoneCode: 294,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Vĩnh Long",
            code: 86,
            divisionType: "tỉnh",
            codename: "tinh_vinh_long",
            phoneCode: 270,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Đồng Tháp",
            code: 87,
            divisionType: "tỉnh",
            codename: "tinh_dong_thap",
            phoneCode: 277,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh An Giang",
            code: 89,
            divisionType: "tỉnh",
            codename: "tinh_an_giang",
            phoneCode: 296,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Kiên Giang",
            code: 91,
            divisionType: "tỉnh",
            codename: "tinh_kien_giang",
            phoneCode: 297,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Cần Thơ",
            code: 92,
            divisionType: "thành phố trung ương",
            codename: "thanh_pho_can_tho",
            phoneCode: 292,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Hậu Giang",
            code: 93,
            divisionType: "tỉnh",
            codename: "tinh_hau_giang",
            phoneCode: 293,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Sóc Trăng",
            code: 94,
            divisionType: "tỉnh",
            codename: "tinh_soc_trang",
            phoneCode: 299,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Bạc Liêu",
            code: 95,
            divisionType: "tỉnh",
            codename: "tinh_bac_lieu",
            phoneCode: 291,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Tỉnh Cà Mau",
            code: 96,
            divisionType: "tỉnh",
            codename: "tinh_ca_mau",
            phoneCode: 290,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Provinces', null, {});
    }
};