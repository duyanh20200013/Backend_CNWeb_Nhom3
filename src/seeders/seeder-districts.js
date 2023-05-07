'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Districts', [{
            name: "Quận Ba Đình",
            code: 1,
            divisionType: "quận",
            codename: "quan_ba_dinh",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Hoàn Kiếm",
            code: 2,
            divisionType: "quận",
            codename: "quan_hoan_kiem",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Tây Hồ",
            code: 3,
            divisionType: "quận",
            codename: "quan_tay_ho",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Long Biên",
            code: 4,
            divisionType: "quận",
            codename: "quan_long_bien",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Cầu Giấy",
            code: 5,
            divisionType: "quận",
            codename: "quan_cau_giay",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Đống Đa",
            code: 6,
            divisionType: "quận",
            codename: "quan_dong_da",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Hai Bà Trưng",
            code: 7,
            divisionType: "quận",
            codename: "quan_hai_ba_trung",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Hoàng Mai",
            code: 8,
            divisionType: "quận",
            codename: "quan_hoang_mai",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Thanh Xuân",
            code: 9,
            divisionType: "quận",
            codename: "quan_thanh_xuan",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Sóc Sơn",
            code: 16,
            divisionType: "huyện",
            codename: "huyen_soc_son",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đông Anh",
            code: 17,
            divisionType: "huyện",
            codename: "huyen_dong_anh",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Gia Lâm",
            code: 18,
            divisionType: "huyện",
            codename: "huyen_gia_lam",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Nam Từ Liêm",
            code: 19,
            divisionType: "quận",
            codename: "quan_nam_tu_liem",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thanh Trì",
            code: 20,
            divisionType: "huyện",
            codename: "huyen_thanh_tri",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Bắc Từ Liêm",
            code: 21,
            divisionType: "quận",
            codename: "quan_bac_tu_liem",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mê Linh",
            code: 250,
            divisionType: "huyện",
            codename: "huyen_me_linh",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Hà Đông",
            code: 268,
            divisionType: "quận",
            codename: "quan_ha_dong",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Sơn Tây",
            code: 269,
            divisionType: "thị xã",
            codename: "thi_xa_son_tay",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ba Vì",
            code: 271,
            divisionType: "huyện",
            codename: "huyen_ba_vi",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phúc Thọ",
            code: 272,
            divisionType: "huyện",
            codename: "huyen_phuc_tho",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đan Phượng",
            code: 273,
            divisionType: "huyện",
            codename: "huyen_dan_phuong",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hoài Đức",
            code: 274,
            divisionType: "huyện",
            codename: "huyen_hoai_duc",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quốc Oai",
            code: 275,
            divisionType: "huyện",
            codename: "huyen_quoc_oai",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thạch Thất",
            code: 276,
            divisionType: "huyện",
            codename: "huyen_thach_that",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Chương Mỹ",
            code: 277,
            divisionType: "huyện",
            codename: "huyen_chuong_my",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thanh Oai",
            code: 278,
            divisionType: "huyện",
            codename: "huyen_thanh_oai",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thường Tín",
            code: 279,
            divisionType: "huyện",
            codename: "huyen_thuong_tin",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phú Xuyên",
            code: 280,
            divisionType: "huyện",
            codename: "huyen_phu_xuyen",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ứng Hòa",
            code: 281,
            divisionType: "huyện",
            codename: "huyen_ung_hoa",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mỹ Đức",
            code: 282,
            divisionType: "huyện",
            codename: "huyen_my_duc",
            provinceCode: 1,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Hà Giang",
            code: 24,
            divisionType: "thành phố",
            codename: "thanh_pho_ha_giang",
            provinceCode: 2,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đồng Văn",
            code: 26,
            divisionType: "huyện",
            codename: "huyen_dong_van",
            provinceCode: 2,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mèo Vạc",
            code: 27,
            divisionType: "huyện",
            codename: "huyen_meo_vac",
            provinceCode: 2,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Minh",
            code: 28,
            divisionType: "huyện",
            codename: "huyen_yen_minh",
            provinceCode: 2,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quản Bạ",
            code: 29,
            divisionType: "huyện",
            codename: "huyen_quan_ba",
            provinceCode: 2,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vị Xuyên",
            code: 30,
            divisionType: "huyện",
            codename: "huyen_vi_xuyen",
            provinceCode: 2,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bắc Mê",
            code: 31,
            divisionType: "huyện",
            codename: "huyen_bac_me",
            provinceCode: 2,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hoàng Su Phì",
            code: 32,
            divisionType: "huyện",
            codename: "huyen_hoang_su_phi",
            provinceCode: 2,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Xín Mần",
            code: 33,
            divisionType: "huyện",
            codename: "huyen_xin_man",
            provinceCode: 2,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bắc Quang",
            code: 34,
            divisionType: "huyện",
            codename: "huyen_bac_quang",
            provinceCode: 2,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quang Bình",
            code: 35,
            divisionType: "huyện",
            codename: "huyen_quang_binh",
            provinceCode: 2,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Cao Bằng",
            code: 40,
            divisionType: "thành phố",
            codename: "thanh_pho_cao_bang",
            provinceCode: 4,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bảo Lâm",
            code: 42,
            divisionType: "huyện",
            codename: "huyen_bao_lam",
            provinceCode: 4,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bảo Lạc",
            code: 43,
            divisionType: "huyện",
            codename: "huyen_bao_lac",
            provinceCode: 4,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hà Quảng",
            code: 45,
            divisionType: "huyện",
            codename: "huyen_ha_quang",
            provinceCode: 4,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Trùng Khánh",
            code: 47,
            divisionType: "huyện",
            codename: "huyen_trung_khanh",
            provinceCode: 4,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hạ Lang",
            code: 48,
            divisionType: "huyện",
            codename: "huyen_ha_lang",
            provinceCode: 4,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quảng Hòa",
            code: 49,
            divisionType: "huyện",
            codename: "huyen_quang_hoa",
            provinceCode: 4,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hoà An",
            code: 51,
            divisionType: "huyện",
            codename: "huyen_hoa_an",
            provinceCode: 4,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nguyên Bình",
            code: 52,
            divisionType: "huyện",
            codename: "huyen_nguyen_binh",
            provinceCode: 4,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thạch An",
            code: 53,
            divisionType: "huyện",
            codename: "huyen_thach_an",
            provinceCode: 4,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành Phố Bắc Kạn",
            code: 58,
            divisionType: "thành phố",
            codename: "thanh_pho_bac_kan",
            provinceCode: 6,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Pác Nặm",
            code: 60,
            divisionType: "huyện",
            codename: "huyen_pac_nam",
            provinceCode: 6,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ba Bể",
            code: 61,
            divisionType: "huyện",
            codename: "huyen_ba_be",
            provinceCode: 6,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ngân Sơn",
            code: 62,
            divisionType: "huyện",
            codename: "huyen_ngan_son",
            provinceCode: 6,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bạch Thông",
            code: 63,
            divisionType: "huyện",
            codename: "huyen_bach_thong",
            provinceCode: 6,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Chợ Đồn",
            code: 64,
            divisionType: "huyện",
            codename: "huyen_cho_don",
            provinceCode: 6,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Chợ Mới",
            code: 65,
            divisionType: "huyện",
            codename: "huyen_cho_moi",
            provinceCode: 6,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Na Rì",
            code: 66,
            divisionType: "huyện",
            codename: "huyen_na_ri",
            provinceCode: 6,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Tuyên Quang",
            code: 70,
            divisionType: "thành phố",
            codename: "thanh_pho_tuyen_quang",
            provinceCode: 8,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lâm Bình",
            code: 71,
            divisionType: "huyện",
            codename: "huyen_lam_binh",
            provinceCode: 8,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Na Hang",
            code: 72,
            divisionType: "huyện",
            codename: "huyen_na_hang",
            provinceCode: 8,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Chiêm Hóa",
            code: 73,
            divisionType: "huyện",
            codename: "huyen_chiem_hoa",
            provinceCode: 8,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hàm Yên",
            code: 74,
            divisionType: "huyện",
            codename: "huyen_ham_yen",
            provinceCode: 8,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Sơn",
            code: 75,
            divisionType: "huyện",
            codename: "huyen_yen_son",
            provinceCode: 8,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Sơn Dương",
            code: 76,
            divisionType: "huyện",
            codename: "huyen_son_duong",
            provinceCode: 8,

            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Lào Cai",
            code: 80,
            divisionType: "thành phố",
            codename: "thanh_pho_lao_cai",
            provinceCode: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bát Xát",
            code: 82,
            divisionType: "huyện",
            codename: "huyen_bat_xat",
            provinceCode: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mường Khương",
            code: 83,
            divisionType: "huyện",
            codename: "huyen_muong_khuong",
            provinceCode: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Si Ma Cai",
            code: 84,
            divisionType: "huyện",
            codename: "huyen_si_ma_cai",
            provinceCode: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bắc Hà",
            code: 85,
            divisionType: "huyện",
            codename: "huyen_bac_ha",
            provinceCode: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bảo Thắng",
            code: 86,
            divisionType: "huyện",
            codename: "huyen_bao_thang",
            provinceCode: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bảo Yên",
            code: 87,
            divisionType: "huyện",
            codename: "huyen_bao_yen",
            provinceCode: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Sa Pa",
            code: 88,
            divisionType: "thị xã",
            codename: "thi_xa_sa_pa",
            provinceCode: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Văn Bàn",
            code: 89,
            divisionType: "huyện",
            codename: "huyen_van_ban",
            provinceCode: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Điện Biên Phủ",
            code: 94,
            divisionType: "thành phố",
            codename: "thanh_pho_dien_bien_phu",
            provinceCode: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Mường Lay",
            code: 95,
            divisionType: "thị xã",
            codename: "thi_xa_muong_lay",
            provinceCode: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mường Nhé",
            code: 96,
            divisionType: "huyện",
            codename: "huyen_muong_nhe",
            provinceCode: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mường Chà",
            code: 97,
            divisionType: "huyện",
            codename: "huyen_muong_cha",
            provinceCode: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tủa Chùa",
            code: 98,
            divisionType: "huyện",
            codename: "huyen_tua_chua",
            provinceCode: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tuần Giáo",
            code: 99,
            divisionType: "huyện",
            codename: "huyen_tuan_giao",
            provinceCode: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Điện Biên",
            code: 100,
            divisionType: "huyện",
            codename: "huyen_dien_bien",
            provinceCode: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Điện Biên Đông",
            code: 101,
            divisionType: "huyện",
            codename: "huyen_dien_bien_dong",
            provinceCode: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mường Ảng",
            code: 102,
            divisionType: "huyện",
            codename: "huyen_muong_ang",
            provinceCode: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nậm Pồ",
            code: 103,
            divisionType: "huyện",
            codename: "huyen_nam_po",
            provinceCode: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Lai Châu",
            code: 105,
            divisionType: "thành phố",
            codename: "thanh_pho_lai_chau",
            provinceCode: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tam Đường",
            code: 106,
            divisionType: "huyện",
            codename: "huyen_tam_duong",
            provinceCode: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mường Tè",
            code: 107,
            divisionType: "huyện",
            codename: "huyen_muong_te",
            provinceCode: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Sìn Hồ",
            code: 108,
            divisionType: "huyện",
            codename: "huyen_sin_ho",
            provinceCode: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phong Thổ",
            code: 109,
            divisionType: "huyện",
            codename: "huyen_phong_tho",
            provinceCode: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Than Uyên",
            code: 110,
            divisionType: "huyện",
            codename: "huyen_than_uyen",
            provinceCode: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Uyên",
            code: 111,
            divisionType: "huyện",
            codename: "huyen_tan_uyen",
            provinceCode: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nậm Nhùn",
            code: 112,
            divisionType: "huyện",
            codename: "huyen_nam_nhun",
            provinceCode: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Sơn La",
            code: 116,
            divisionType: "thành phố",
            codename: "thanh_pho_son_la",
            provinceCode: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quỳnh Nhai",
            code: 118,
            divisionType: "huyện",
            codename: "huyen_quynh_nhai",
            provinceCode: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thuận Châu",
            code: 119,
            divisionType: "huyện",
            codename: "huyen_thuan_chau",
            provinceCode: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mường La",
            code: 120,
            divisionType: "huyện",
            codename: "huyen_muong_la",
            provinceCode: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bắc Yên",
            code: 121,
            divisionType: "huyện",
            codename: "huyen_bac_yen",
            provinceCode: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phù Yên",
            code: 122,
            divisionType: "huyện",
            codename: "huyen_phu_yen",
            provinceCode: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mộc Châu",
            code: 123,
            divisionType: "huyện",
            codename: "huyen_moc_chau",
            provinceCode: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Châu",
            code: 124,
            divisionType: "huyện",
            codename: "huyen_yen_chau",
            provinceCode: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mai Sơn",
            code: 125,
            divisionType: "huyện",
            codename: "huyen_mai_son",
            provinceCode: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Sông Mã",
            code: 126,
            divisionType: "huyện",
            codename: "huyen_song_ma",
            provinceCode: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Sốp Cộp",
            code: 127,
            divisionType: "huyện",
            codename: "huyen_sop_cop",
            provinceCode: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vân Hồ",
            code: 128,
            divisionType: "huyện",
            codename: "huyen_van_ho",
            provinceCode: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Yên Bái",
            code: 132,
            divisionType: "thành phố",
            codename: "thanh_pho_yen_bai",
            provinceCode: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Nghĩa Lộ",
            code: 133,
            divisionType: "thị xã",
            codename: "thi_xa_nghia_lo",
            provinceCode: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lục Yên",
            code: 135,
            divisionType: "huyện",
            codename: "huyen_luc_yen",
            provinceCode: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Văn Yên",
            code: 136,
            divisionType: "huyện",
            codename: "huyen_van_yen",
            provinceCode: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mù Căng Chải",
            code: 137,
            divisionType: "huyện",
            codename: "huyen_mu_cang_chai",
            provinceCode: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Trấn Yên",
            code: 138,
            divisionType: "huyện",
            codename: "huyen_tran_yen",
            provinceCode: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Trạm Tấu",
            code: 139,
            divisionType: "huyện",
            codename: "huyen_tram_tau",
            provinceCode: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Văn Chấn",
            code: 140,
            divisionType: "huyện",
            codename: "huyen_van_chan",
            provinceCode: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Bình",
            code: 141,
            divisionType: "huyện",
            codename: "huyen_yen_binh",
            provinceCode: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Hòa Bình",
            code: 148,
            divisionType: "thành phố",
            codename: "thanh_pho_hoa_binh",
            provinceCode: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đà Bắc",
            code: 150,
            divisionType: "huyện",
            codename: "huyen_da_bac",
            provinceCode: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lương Sơn",
            code: 152,
            divisionType: "huyện",
            codename: "huyen_luong_son",
            provinceCode: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kim Bôi",
            code: 153,
            divisionType: "huyện",
            codename: "huyen_kim_boi",
            provinceCode: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cao Phong",
            code: 154,
            divisionType: "huyện",
            codename: "huyen_cao_phong",
            provinceCode: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Lạc",
            code: 155,
            divisionType: "huyện",
            codename: "huyen_tan_lac",
            provinceCode: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mai Châu",
            code: 156,
            divisionType: "huyện",
            codename: "huyen_mai_chau",
            provinceCode: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lạc Sơn",
            code: 157,
            divisionType: "huyện",
            codename: "huyen_lac_son",
            provinceCode: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Thủy",
            code: 158,
            divisionType: "huyện",
            codename: "huyen_yen_thuy",
            provinceCode: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lạc Thủy",
            code: 159,
            divisionType: "huyện",
            codename: "huyen_lac_thuy",
            provinceCode: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Thái Nguyên",
            code: 164,
            divisionType: "thành phố",
            codename: "thanh_pho_thai_nguyen",
            provinceCode: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Sông Công",
            code: 165,
            divisionType: "thành phố",
            codename: "thanh_pho_song_cong",
            provinceCode: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Định Hóa",
            code: 167,
            divisionType: "huyện",
            codename: "huyen_dinh_hoa",
            provinceCode: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phú Lương",
            code: 168,
            divisionType: "huyện",
            codename: "huyen_phu_luong",
            provinceCode: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đồng Hỷ",
            code: 169,
            divisionType: "huyện",
            codename: "huyen_dong_hy",
            provinceCode: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Võ Nhai",
            code: 170,
            divisionType: "huyện",
            codename: "huyen_vo_nhai",
            provinceCode: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đại Từ",
            code: 171,
            divisionType: "huyện",
            codename: "huyen_dai_tu",
            provinceCode: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Phổ Yên",
            code: 172,
            divisionType: "thị xã",
            codename: "thi_xa_pho_yen",
            provinceCode: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phú Bình",
            code: 173,
            divisionType: "huyện",
            codename: "huyen_phu_binh",
            provinceCode: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Lạng Sơn",
            code: 178,
            divisionType: "thành phố",
            codename: "thanh_pho_lang_son",
            provinceCode: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tràng Định",
            code: 180,
            divisionType: "huyện",
            codename: "huyen_trang_dinh",
            provinceCode: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bình Gia",
            code: 181,
            divisionType: "huyện",
            codename: "huyen_binh_gia",
            provinceCode: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Văn Lãng",
            code: 182,
            divisionType: "huyện",
            codename: "huyen_van_lang",
            provinceCode: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cao Lộc",
            code: 183,
            divisionType: "huyện",
            codename: "huyen_cao_loc",
            provinceCode: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Văn Quan",
            code: 184,
            divisionType: "huyện",
            codename: "huyen_van_quan",
            provinceCode: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bắc Sơn",
            code: 185,
            divisionType: "huyện",
            codename: "huyen_bac_son",
            provinceCode: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hữu Lũng",
            code: 186,
            divisionType: "huyện",
            codename: "huyen_huu_lung",
            provinceCode: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Chi Lăng",
            code: 187,
            divisionType: "huyện",
            codename: "huyen_chi_lang",
            provinceCode: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lộc Bình",
            code: 188,
            divisionType: "huyện",
            codename: "huyen_loc_binh",
            provinceCode: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đình Lập",
            code: 189,
            divisionType: "huyện",
            codename: "huyen_dinh_lap",
            provinceCode: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Hạ Long",
            code: 193,
            divisionType: "thành phố",
            codename: "thanh_pho_ha_long",
            provinceCode: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Móng Cái",
            code: 194,
            divisionType: "thành phố",
            codename: "thanh_pho_mong_cai",
            provinceCode: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Cẩm Phả",
            code: 195,
            divisionType: "thành phố",
            codename: "thanh_pho_cam_pha",
            provinceCode: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Uông Bí",
            code: 196,
            divisionType: "thành phố",
            codename: "thanh_pho_uong_bi",
            provinceCode: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bình Liêu",
            code: 198,
            divisionType: "huyện",
            codename: "huyen_binh_lieu",
            provinceCode: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tiên Yên",
            code: 199,
            divisionType: "huyện",
            codename: "huyen_tien_yen",
            provinceCode: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đầm Hà",
            code: 200,
            divisionType: "huyện",
            codename: "huyen_dam_ha",
            provinceCode: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hải Hà",
            code: 201,
            divisionType: "huyện",
            codename: "huyen_hai_ha",
            provinceCode: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ba Chẽ",
            code: 202,
            divisionType: "huyện",
            codename: "huyen_ba_che",
            provinceCode: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vân Đồn",
            code: 203,
            divisionType: "huyện",
            codename: "huyen_van_don",
            provinceCode: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Đông Triều",
            code: 205,
            divisionType: "thị xã",
            codename: "thi_xa_dong_trieu",
            provinceCode: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Quảng Yên",
            code: 206,
            divisionType: "thị xã",
            codename: "thi_xa_quang_yen",
            provinceCode: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cô Tô",
            code: 207,
            divisionType: "huyện",
            codename: "huyen_co_to",
            provinceCode: 22,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Bắc Giang",
            code: 213,
            divisionType: "thành phố",
            codename: "thanh_pho_bac_giang",
            provinceCode: 24,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Thế",
            code: 215,
            divisionType: "huyện",
            codename: "huyen_yen_the",
            provinceCode: 24,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Yên",
            code: 216,
            divisionType: "huyện",
            codename: "huyen_tan_yen",
            provinceCode: 24,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lạng Giang",
            code: 217,
            divisionType: "huyện",
            codename: "huyen_lang_giang",
            provinceCode: 24,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lục Nam",
            code: 218,
            divisionType: "huyện",
            codename: "huyen_luc_nam",
            provinceCode: 24,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lục Ngạn",
            code: 219,
            divisionType: "huyện",
            codename: "huyen_luc_ngan",
            provinceCode: 24,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Sơn Động",
            code: 220,
            divisionType: "huyện",
            codename: "huyen_son_dong",
            provinceCode: 24,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Dũng",
            code: 221,
            divisionType: "huyện",
            codename: "huyen_yen_dung",
            provinceCode: 24,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Việt Yên",
            code: 222,
            divisionType: "huyện",
            codename: "huyen_viet_yen",
            provinceCode: 24,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hiệp Hòa",
            code: 223,
            divisionType: "huyện",
            codename: "huyen_hiep_hoa",
            provinceCode: 24,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Việt Trì",
            code: 227,
            divisionType: "thành phố",
            codename: "thanh_pho_viet_tri",
            provinceCode: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Phú Thọ",
            code: 228,
            divisionType: "thị xã",
            codename: "thi_xa_phu_tho",
            provinceCode: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đoan Hùng",
            code: 230,
            divisionType: "huyện",
            codename: "huyen_doan_hung",
            provinceCode: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hạ Hoà",
            code: 231,
            divisionType: "huyện",
            codename: "huyen_ha_hoa",
            provinceCode: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thanh Ba",
            code: 232,
            divisionType: "huyện",
            codename: "huyen_thanh_ba",
            provinceCode: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phù Ninh",
            code: 233,
            divisionType: "huyện",
            codename: "huyen_phu_ninh",
            provinceCode: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Lập",
            code: 234,
            divisionType: "huyện",
            codename: "huyen_yen_lap",
            provinceCode: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cẩm Khê",
            code: 235,
            divisionType: "huyện",
            codename: "huyen_cam_khe",
            provinceCode: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tam Nông",
            code: 236,
            divisionType: "huyện",
            codename: "huyen_tam_nong",
            provinceCode: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lâm Thao",
            code: 237,
            divisionType: "huyện",
            codename: "huyen_lam_thao",
            provinceCode: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thanh Sơn",
            code: 238,
            divisionType: "huyện",
            codename: "huyen_thanh_son",
            provinceCode: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thanh Thuỷ",
            code: 239,
            divisionType: "huyện",
            codename: "huyen_thanh_thuy",
            provinceCode: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Sơn",
            code: 240,
            divisionType: "huyện",
            codename: "huyen_tan_son",
            provinceCode: 25,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Vĩnh Yên",
            code: 243,
            divisionType: "thành phố",
            codename: "thanh_pho_vinh_yen",
            provinceCode: 26,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Phúc Yên",
            code: 244,
            divisionType: "thành phố",
            codename: "thanh_pho_phuc_yen",
            provinceCode: 26,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lập Thạch",
            code: 246,
            divisionType: "huyện",
            codename: "huyen_lap_thach",
            provinceCode: 26,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tam Dương",
            code: 247,
            divisionType: "huyện",
            codename: "huyen_tam_duong",
            provinceCode: 26,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tam Đảo",
            code: 248,
            divisionType: "huyện",
            codename: "huyen_tam_dao",
            provinceCode: 26,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bình Xuyên",
            code: 249,
            divisionType: "huyện",
            codename: "huyen_binh_xuyen",
            provinceCode: 26,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Lạc",
            code: 251,
            divisionType: "huyện",
            codename: "huyen_yen_lac",
            provinceCode: 26,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vĩnh Tường",
            code: 252,
            divisionType: "huyện",
            codename: "huyen_vinh_tuong",
            provinceCode: 26,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Sông Lô",
            code: 253,
            divisionType: "huyện",
            codename: "huyen_song_lo",
            provinceCode: 26,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Bắc Ninh",
            code: 256,
            divisionType: "thành phố",
            codename: "thanh_pho_bac_ninh",
            provinceCode: 27,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Phong",
            code: 258,
            divisionType: "huyện",
            codename: "huyen_yen_phong",
            provinceCode: 27,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quế Võ",
            code: 259,
            divisionType: "huyện",
            codename: "huyen_que_vo",
            provinceCode: 27,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tiên Du",
            code: 260,
            divisionType: "huyện",
            codename: "huyen_tien_du",
            provinceCode: 27,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Từ Sơn",
            code: 261,
            divisionType: "thị xã",
            codename: "thi_xa_tu_son",
            provinceCode: 27,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thuận Thành",
            code: 262,
            divisionType: "huyện",
            codename: "huyen_thuan_thanh",
            provinceCode: 27,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Gia Bình",
            code: 263,
            divisionType: "huyện",
            codename: "huyen_gia_binh",
            provinceCode: 27,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lương Tài",
            code: 264,
            divisionType: "huyện",
            codename: "huyen_luong_tai",
            provinceCode: 27,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Hải Dương",
            code: 288,
            divisionType: "thành phố",
            codename: "thanh_pho_hai_duong",
            provinceCode: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Chí Linh",
            code: 290,
            divisionType: "thành phố",
            codename: "thanh_pho_chi_linh",
            provinceCode: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nam Sách",
            code: 291,
            divisionType: "huyện",
            codename: "huyen_nam_sach",
            provinceCode: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Kinh Môn",
            code: 292,
            divisionType: "thị xã",
            codename: "thi_xa_kinh_mon",
            provinceCode: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kim Thành",
            code: 293,
            divisionType: "huyện",
            codename: "huyen_kim_thanh",
            provinceCode: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thanh Hà",
            code: 294,
            divisionType: "huyện",
            codename: "huyen_thanh_ha",
            provinceCode: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cẩm Giàng",
            code: 295,
            divisionType: "huyện",
            codename: "huyen_cam_giang",
            provinceCode: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bình Giang",
            code: 296,
            divisionType: "huyện",
            codename: "huyen_binh_giang",
            provinceCode: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Gia Lộc",
            code: 297,
            divisionType: "huyện",
            codename: "huyen_gia_loc",
            provinceCode: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tứ Kỳ",
            code: 298,
            divisionType: "huyện",
            codename: "huyen_tu_ky",
            provinceCode: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ninh Giang",
            code: 299,
            divisionType: "huyện",
            codename: "huyen_ninh_giang",
            provinceCode: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thanh Miện",
            code: 300,
            divisionType: "huyện",
            codename: "huyen_thanh_mien",
            provinceCode: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Hồng Bàng",
            code: 303,
            divisionType: "quận",
            codename: "quan_hong_bang",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Ngô Quyền",
            code: 304,
            divisionType: "quận",
            codename: "quan_ngo_quyen",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Lê Chân",
            code: 305,
            divisionType: "quận",
            codename: "quan_le_chan",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Hải An",
            code: 306,
            divisionType: "quận",
            codename: "quan_hai_an",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Kiến An",
            code: 307,
            divisionType: "quận",
            codename: "quan_kien_an",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Đồ Sơn",
            code: 308,
            divisionType: "quận",
            codename: "quan_do_son",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Dương Kinh",
            code: 309,
            divisionType: "quận",
            codename: "quan_duong_kinh",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thuỷ Nguyên",
            code: 311,
            divisionType: "huyện",
            codename: "huyen_thuy_nguyen",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện An Dương",
            code: 312,
            divisionType: "huyện",
            codename: "huyen_an_duong",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện An Lão",
            code: 313,
            divisionType: "huyện",
            codename: "huyen_an_lao",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kiến Thuỵ",
            code: 314,
            divisionType: "huyện",
            codename: "huyen_kien_thuy",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tiên Lãng",
            code: 315,
            divisionType: "huyện",
            codename: "huyen_tien_lang",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vĩnh Bảo",
            code: 316,
            divisionType: "huyện",
            codename: "huyen_vinh_bao",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cát Hải",
            code: 317,
            divisionType: "huyện",
            codename: "huyen_cat_hai",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bạch Long Vĩ",
            code: 318,
            divisionType: "huyện",
            codename: "huyen_bach_long_vi",
            provinceCode: 31,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Hưng Yên",
            code: 323,
            divisionType: "thành phố",
            codename: "thanh_pho_hung_yen",
            provinceCode: 33,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Văn Lâm",
            code: 325,
            divisionType: "huyện",
            codename: "huyen_van_lam",
            provinceCode: 33,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Văn Giang",
            code: 326,
            divisionType: "huyện",
            codename: "huyen_van_giang",
            provinceCode: 33,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Mỹ",
            code: 327,
            divisionType: "huyện",
            codename: "huyen_yen_my",
            provinceCode: 33,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Mỹ Hào",
            code: 328,
            divisionType: "thị xã",
            codename: "thi_xa_my_hao",
            provinceCode: 33,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ân Thi",
            code: 329,
            divisionType: "huyện",
            codename: "huyen_an_thi",
            provinceCode: 33,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Khoái Châu",
            code: 330,
            divisionType: "huyện",
            codename: "huyen_khoai_chau",
            provinceCode: 33,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kim Động",
            code: 331,
            divisionType: "huyện",
            codename: "huyen_kim_dong",
            provinceCode: 33,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tiên Lữ",
            code: 332,
            divisionType: "huyện",
            codename: "huyen_tien_lu",
            provinceCode: 33,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phù Cừ",
            code: 333,
            divisionType: "huyện",
            codename: "huyen_phu_cu",
            provinceCode: 33,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Thái Bình",
            code: 336,
            divisionType: "thành phố",
            codename: "thanh_pho_thai_binh",
            provinceCode: 34,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quỳnh Phụ",
            code: 338,
            divisionType: "huyện",
            codename: "huyen_quynh_phu",
            provinceCode: 34,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hưng Hà",
            code: 339,
            divisionType: "huyện",
            codename: "huyen_hung_ha",
            provinceCode: 34,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đông Hưng",
            code: 340,
            divisionType: "huyện",
            codename: "huyen_dong_hung",
            provinceCode: 34,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thái Thụy",
            code: 341,
            divisionType: "huyện",
            codename: "huyen_thai_thuy",
            provinceCode: 34,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tiền Hải",
            code: 342,
            divisionType: "huyện",
            codename: "huyen_tien_hai",
            provinceCode: 34,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kiến Xương",
            code: 343,
            divisionType: "huyện",
            codename: "huyen_kien_xuong",
            provinceCode: 34,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vũ Thư",
            code: 344,
            divisionType: "huyện",
            codename: "huyen_vu_thu",
            provinceCode: 34,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Phủ Lý",
            code: 347,
            divisionType: "thành phố",
            codename: "thanh_pho_phu_ly",
            provinceCode: 35,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Duy Tiên",
            code: 349,
            divisionType: "thị xã",
            codename: "thi_xa_duy_tien",
            provinceCode: 35,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kim Bảng",
            code: 350,
            divisionType: "huyện",
            codename: "huyen_kim_bang",
            provinceCode: 35,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thanh Liêm",
            code: 351,
            divisionType: "huyện",
            codename: "huyen_thanh_liem",
            provinceCode: 35,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bình Lục",
            code: 352,
            divisionType: "huyện",
            codename: "huyen_binh_luc",
            provinceCode: 35,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lý Nhân",
            code: 353,
            divisionType: "huyện",
            codename: "huyen_ly_nhan",
            provinceCode: 35,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Nam Định",
            code: 356,
            divisionType: "thành phố",
            codename: "thanh_pho_nam_dinh",
            provinceCode: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mỹ Lộc",
            code: 358,
            divisionType: "huyện",
            codename: "huyen_my_loc",
            provinceCode: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vụ Bản",
            code: 359,
            divisionType: "huyện",
            codename: "huyen_vu_ban",
            provinceCode: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ý Yên",
            code: 360,
            divisionType: "huyện",
            codename: "huyen_y_yen",
            provinceCode: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nghĩa Hưng",
            code: 361,
            divisionType: "huyện",
            codename: "huyen_nghia_hung",
            provinceCode: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nam Trực",
            code: 362,
            divisionType: "huyện",
            codename: "huyen_nam_truc",
            provinceCode: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Trực Ninh",
            code: 363,
            divisionType: "huyện",
            codename: "huyen_truc_ninh",
            provinceCode: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Xuân Trường",
            code: 364,
            divisionType: "huyện",
            codename: "huyen_xuan_truong",
            provinceCode: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Giao Thủy",
            code: 365,
            divisionType: "huyện",
            codename: "huyen_giao_thuy",
            provinceCode: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hải Hậu",
            code: 366,
            divisionType: "huyện",
            codename: "huyen_hai_hau",
            provinceCode: 36,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Ninh Bình",
            code: 369,
            divisionType: "thành phố",
            codename: "thanh_pho_ninh_binh",
            provinceCode: 37,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Tam Điệp",
            code: 370,
            divisionType: "thành phố",
            codename: "thanh_pho_tam_diep",
            provinceCode: 37,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nho Quan",
            code: 372,
            divisionType: "huyện",
            codename: "huyen_nho_quan",
            provinceCode: 37,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Gia Viễn",
            code: 373,
            divisionType: "huyện",
            codename: "huyen_gia_vien",
            provinceCode: 37,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hoa Lư",
            code: 374,
            divisionType: "huyện",
            codename: "huyen_hoa_lu",
            provinceCode: 37,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Khánh",
            code: 375,
            divisionType: "huyện",
            codename: "huyen_yen_khanh",
            provinceCode: 37,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kim Sơn",
            code: 376,
            divisionType: "huyện",
            codename: "huyen_kim_son",
            provinceCode: 37,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Mô",
            code: 377,
            divisionType: "huyện",
            codename: "huyen_yen_mo",
            provinceCode: 37,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Thanh Hóa",
            code: 380,
            divisionType: "thành phố",
            codename: "thanh_pho_thanh_hoa",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Bỉm Sơn",
            code: 381,
            divisionType: "thị xã",
            codename: "thi_xa_bim_son",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Sầm Sơn",
            code: 382,
            divisionType: "thành phố",
            codename: "thanh_pho_sam_son",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mường Lát",
            code: 384,
            divisionType: "huyện",
            codename: "huyen_muong_lat",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quan Hóa",
            code: 385,
            divisionType: "huyện",
            codename: "huyen_quan_hoa",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bá Thước",
            code: 386,
            divisionType: "huyện",
            codename: "huyen_ba_thuoc",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quan Sơn",
            code: 387,
            divisionType: "huyện",
            codename: "huyen_quan_son",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lang Chánh",
            code: 388,
            divisionType: "huyện",
            codename: "huyen_lang_chanh",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ngọc Lặc",
            code: 389,
            divisionType: "huyện",
            codename: "huyen_ngoc_lac",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cẩm Thủy",
            code: 390,
            divisionType: "huyện",
            codename: "huyen_cam_thuy",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thạch Thành",
            code: 391,
            divisionType: "huyện",
            codename: "huyen_thach_thanh",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hà Trung",
            code: 392,
            divisionType: "huyện",
            codename: "huyen_ha_trung",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vĩnh Lộc",
            code: 393,
            divisionType: "huyện",
            codename: "huyen_vinh_loc",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Định",
            code: 394,
            divisionType: "huyện",
            codename: "huyen_yen_dinh",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thọ Xuân",
            code: 395,
            divisionType: "huyện",
            codename: "huyen_tho_xuan",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thường Xuân",
            code: 396,
            divisionType: "huyện",
            codename: "huyen_thuong_xuan",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Triệu Sơn",
            code: 397,
            divisionType: "huyện",
            codename: "huyen_trieu_son",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thiệu Hóa",
            code: 398,
            divisionType: "huyện",
            codename: "huyen_thieu_hoa",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hoằng Hóa",
            code: 399,
            divisionType: "huyện",
            codename: "huyen_hoang_hoa",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hậu Lộc",
            code: 400,
            divisionType: "huyện",
            codename: "huyen_hau_loc",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nga Sơn",
            code: 401,
            divisionType: "huyện",
            codename: "huyen_nga_son",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Như Xuân",
            code: 402,
            divisionType: "huyện",
            codename: "huyen_nhu_xuan",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Như Thanh",
            code: 403,
            divisionType: "huyện",
            codename: "huyen_nhu_thanh",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nông Cống",
            code: 404,
            divisionType: "huyện",
            codename: "huyen_nong_cong",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đông Sơn",
            code: 405,
            divisionType: "huyện",
            codename: "huyen_dong_son",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quảng Xương",
            code: 406,
            divisionType: "huyện",
            codename: "huyen_quang_xuong",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Nghi Sơn",
            code: 407,
            divisionType: "thị xã",
            codename: "thi_xa_nghi_son",
            provinceCode: 38,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Vinh",
            code: 412,
            divisionType: "thành phố",
            codename: "thanh_pho_vinh",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Cửa Lò",
            code: 413,
            divisionType: "thị xã",
            codename: "thi_xa_cua_lo",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Thái Hoà",
            code: 414,
            divisionType: "thị xã",
            codename: "thi_xa_thai_hoa",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quế Phong",
            code: 415,
            divisionType: "huyện",
            codename: "huyen_que_phong",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quỳ Châu",
            code: 416,
            divisionType: "huyện",
            codename: "huyen_quy_chau",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kỳ Sơn",
            code: 417,
            divisionType: "huyện",
            codename: "huyen_ky_son",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tương Dương",
            code: 418,
            divisionType: "huyện",
            codename: "huyen_tuong_duong",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nghĩa Đàn",
            code: 419,
            divisionType: "huyện",
            codename: "huyen_nghia_dan",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quỳ Hợp",
            code: 420,
            divisionType: "huyện",
            codename: "huyen_quy_hop",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quỳnh Lưu",
            code: 421,
            divisionType: "huyện",
            codename: "huyen_quynh_luu",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Con Cuông",
            code: 422,
            divisionType: "huyện",
            codename: "huyen_con_cuong",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Kỳ",
            code: 423,
            divisionType: "huyện",
            codename: "huyen_tan_ky",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Anh Sơn",
            code: 424,
            divisionType: "huyện",
            codename: "huyen_anh_son",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Diễn Châu",
            code: 425,
            divisionType: "huyện",
            codename: "huyen_dien_chau",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Yên Thành",
            code: 426,
            divisionType: "huyện",
            codename: "huyen_yen_thanh",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đô Lương",
            code: 427,
            divisionType: "huyện",
            codename: "huyen_do_luong",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thanh Chương",
            code: 428,
            divisionType: "huyện",
            codename: "huyen_thanh_chuong",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nghi Lộc",
            code: 429,
            divisionType: "huyện",
            codename: "huyen_nghi_loc",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nam Đàn",
            code: 430,
            divisionType: "huyện",
            codename: "huyen_nam_dan",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hưng Nguyên",
            code: 431,
            divisionType: "huyện",
            codename: "huyen_hung_nguyen",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Hoàng Mai",
            code: 432,
            divisionType: "thị xã",
            codename: "thi_xa_hoang_mai",
            provinceCode: 40,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Hà Tĩnh",
            code: 436,
            divisionType: "thành phố",
            codename: "thanh_pho_ha_tinh",
            provinceCode: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Hồng Lĩnh",
            code: 437,
            divisionType: "thị xã",
            codename: "thi_xa_hong_linh",
            provinceCode: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hương Sơn",
            code: 439,
            divisionType: "huyện",
            codename: "huyen_huong_son",
            provinceCode: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đức Thọ",
            code: 440,
            divisionType: "huyện",
            codename: "huyen_duc_tho",
            provinceCode: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vũ Quang",
            code: 441,
            divisionType: "huyện",
            codename: "huyen_vu_quang",
            provinceCode: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nghi Xuân",
            code: 442,
            divisionType: "huyện",
            codename: "huyen_nghi_xuan",
            provinceCode: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Can Lộc",
            code: 443,
            divisionType: "huyện",
            codename: "huyen_can_loc",
            provinceCode: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hương Khê",
            code: 444,
            divisionType: "huyện",
            codename: "huyen_huong_khe",
            provinceCode: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thạch Hà",
            code: 445,
            divisionType: "huyện",
            codename: "huyen_thach_ha",
            provinceCode: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cẩm Xuyên",
            code: 446,
            divisionType: "huyện",
            codename: "huyen_cam_xuyen",
            provinceCode: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kỳ Anh",
            code: 447,
            divisionType: "huyện",
            codename: "huyen_ky_anh",
            provinceCode: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lộc Hà",
            code: 448,
            divisionType: "huyện",
            codename: "huyen_loc_ha",
            provinceCode: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Kỳ Anh",
            code: 449,
            divisionType: "thị xã",
            codename: "thi_xa_ky_anh",
            provinceCode: 42,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành Phố Đồng Hới",
            code: 450,
            divisionType: "thành phố",
            codename: "thanh_pho_dong_hoi",
            provinceCode: 44,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Minh Hóa",
            code: 452,
            divisionType: "huyện",
            codename: "huyen_minh_hoa",
            provinceCode: 44,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tuyên Hóa",
            code: 453,
            divisionType: "huyện",
            codename: "huyen_tuyen_hoa",
            provinceCode: 44,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quảng Trạch",
            code: 454,
            divisionType: "huyện",
            codename: "huyen_quang_trach",
            provinceCode: 44,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bố Trạch",
            code: 455,
            divisionType: "huyện",
            codename: "huyen_bo_trach",
            provinceCode: 44,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quảng Ninh",
            code: 456,
            divisionType: "huyện",
            codename: "huyen_quang_ninh",
            provinceCode: 44,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lệ Thủy",
            code: 457,
            divisionType: "huyện",
            codename: "huyen_le_thuy",
            provinceCode: 44,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Ba Đồn",
            code: 458,
            divisionType: "thị xã",
            codename: "thi_xa_ba_don",
            provinceCode: 44,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Đông Hà",
            code: 461,
            divisionType: "thành phố",
            codename: "thanh_pho_dong_ha",
            provinceCode: 45,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Quảng Trị",
            code: 462,
            divisionType: "thị xã",
            codename: "thi_xa_quang_tri",
            provinceCode: 45,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vĩnh Linh",
            code: 464,
            divisionType: "huyện",
            codename: "huyen_vinh_linh",
            provinceCode: 45,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hướng Hóa",
            code: 465,
            divisionType: "huyện",
            codename: "huyen_huong_hoa",
            provinceCode: 45,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Gio Linh",
            code: 466,
            divisionType: "huyện",
            codename: "huyen_gio_linh",
            provinceCode: 45,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đa Krông",
            code: 467,
            divisionType: "huyện",
            codename: "huyen_da_krong",
            provinceCode: 45,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cam Lộ",
            code: 468,
            divisionType: "huyện",
            codename: "huyen_cam_lo",
            provinceCode: 45,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Triệu Phong",
            code: 469,
            divisionType: "huyện",
            codename: "huyen_trieu_phong",
            provinceCode: 45,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hải Lăng",
            code: 470,
            divisionType: "huyện",
            codename: "huyen_hai_lang",
            provinceCode: 45,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cồn Cỏ",
            code: 471,
            divisionType: "huyện",
            codename: "huyen_con_co",
            provinceCode: 45,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Huế",
            code: 474,
            divisionType: "thành phố",
            codename: "thanh_pho_hue",
            provinceCode: 46,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phong Điền",
            code: 476,
            divisionType: "huyện",
            codename: "huyen_phong_dien",
            provinceCode: 46,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quảng Điền",
            code: 477,
            divisionType: "huyện",
            codename: "huyen_quang_dien",
            provinceCode: 46,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phú Vang",
            code: 478,
            divisionType: "huyện",
            codename: "huyen_phu_vang",
            provinceCode: 46,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Hương Thủy",
            code: 479,
            divisionType: "thị xã",
            codename: "thi_xa_huong_thuy",
            provinceCode: 46,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Hương Trà",
            code: 480,
            divisionType: "thị xã",
            codename: "thi_xa_huong_tra",
            provinceCode: 46,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện A Lưới",
            code: 481,
            divisionType: "huyện",
            codename: "huyen_a_luoi",
            provinceCode: 46,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phú Lộc",
            code: 482,
            divisionType: "huyện",
            codename: "huyen_phu_loc",
            provinceCode: 46,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nam Đông",
            code: 483,
            divisionType: "huyện",
            codename: "huyen_nam_dong",
            provinceCode: 46,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Liên Chiểu",
            code: 490,
            divisionType: "quận",
            codename: "quan_lien_chieu",
            provinceCode: 48,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Thanh Khê",
            code: 491,
            divisionType: "quận",
            codename: "quan_thanh_khe",
            provinceCode: 48,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Hải Châu",
            code: 492,
            divisionType: "quận",
            codename: "quan_hai_chau",
            provinceCode: 48,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Sơn Trà",
            code: 493,
            divisionType: "quận",
            codename: "quan_son_tra",
            provinceCode: 48,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Ngũ Hành Sơn",
            code: 494,
            divisionType: "quận",
            codename: "quan_ngu_hanh_son",
            provinceCode: 48,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Cẩm Lệ",
            code: 495,
            divisionType: "quận",
            codename: "quan_cam_le",
            provinceCode: 48,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hòa Vang",
            code: 497,
            divisionType: "huyện",
            codename: "huyen_hoa_vang",
            provinceCode: 48,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hoàng Sa",
            code: 498,
            divisionType: "huyện",
            codename: "huyen_hoang_sa",
            provinceCode: 48,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Tam Kỳ",
            code: 502,
            divisionType: "thành phố",
            codename: "thanh_pho_tam_ky",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Hội An",
            code: 503,
            divisionType: "thành phố",
            codename: "thanh_pho_hoi_an",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tây Giang",
            code: 504,
            divisionType: "huyện",
            codename: "huyen_tay_giang",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đông Giang",
            code: 505,
            divisionType: "huyện",
            codename: "huyen_dong_giang",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đại Lộc",
            code: 506,
            divisionType: "huyện",
            codename: "huyen_dai_loc",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Điện Bàn",
            code: 507,
            divisionType: "thị xã",
            codename: "thi_xa_dien_ban",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Duy Xuyên",
            code: 508,
            divisionType: "huyện",
            codename: "huyen_duy_xuyen",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Quế Sơn",
            code: 509,
            divisionType: "huyện",
            codename: "huyen_que_son",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nam Giang",
            code: 510,
            divisionType: "huyện",
            codename: "huyen_nam_giang",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phước Sơn",
            code: 511,
            divisionType: "huyện",
            codename: "huyen_phuoc_son",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hiệp Đức",
            code: 512,
            divisionType: "huyện",
            codename: "huyen_hiep_duc",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thăng Bình",
            code: 513,
            divisionType: "huyện",
            codename: "huyen_thang_binh",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tiên Phước",
            code: 514,
            divisionType: "huyện",
            codename: "huyen_tien_phuoc",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bắc Trà My",
            code: 515,
            divisionType: "huyện",
            codename: "huyen_bac_tra_my",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nam Trà My",
            code: 516,
            divisionType: "huyện",
            codename: "huyen_nam_tra_my",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Núi Thành",
            code: 517,
            divisionType: "huyện",
            codename: "huyen_nui_thanh",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phú Ninh",
            code: 518,
            divisionType: "huyện",
            codename: "huyen_phu_ninh",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nông Sơn",
            code: 519,
            divisionType: "huyện",
            codename: "huyen_nong_son",
            provinceCode: 49,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Quảng Ngãi",
            code: 522,
            divisionType: "thành phố",
            codename: "thanh_pho_quang_ngai",
            provinceCode: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bình Sơn",
            code: 524,
            divisionType: "huyện",
            codename: "huyen_binh_son",
            provinceCode: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Trà Bồng",
            code: 525,
            divisionType: "huyện",
            codename: "huyen_tra_bong",
            provinceCode: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Sơn Tịnh",
            code: 527,
            divisionType: "huyện",
            codename: "huyen_son_tinh",
            provinceCode: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tư Nghĩa",
            code: 528,
            divisionType: "huyện",
            codename: "huyen_tu_nghia",
            provinceCode: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Sơn Hà",
            code: 529,
            divisionType: "huyện",
            codename: "huyen_son_ha",
            provinceCode: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Sơn Tây",
            code: 530,
            divisionType: "huyện",
            codename: "huyen_son_tay",
            provinceCode: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Minh Long",
            code: 531,
            divisionType: "huyện",
            codename: "huyen_minh_long",
            provinceCode: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nghĩa Hành",
            code: 532,
            divisionType: "huyện",
            codename: "huyen_nghia_hanh",
            provinceCode: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mộ Đức",
            code: 533,
            divisionType: "huyện",
            codename: "huyen_mo_duc",
            provinceCode: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Đức Phổ",
            code: 534,
            divisionType: "thị xã",
            codename: "thi_xa_duc_pho",
            provinceCode: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ba Tơ",
            code: 535,
            divisionType: "huyện",
            codename: "huyen_ba_to",
            provinceCode: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lý Sơn",
            code: 536,
            divisionType: "huyện",
            codename: "huyen_ly_son",
            provinceCode: 51,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Quy Nhơn",
            code: 540,
            divisionType: "thành phố",
            codename: "thanh_pho_quy_nhon",
            provinceCode: 52,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện An Lão",
            code: 542,
            divisionType: "huyện",
            codename: "huyen_an_lao",
            provinceCode: 52,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Hoài Nhơn",
            code: 543,
            divisionType: "thị xã",
            codename: "thi_xa_hoai_nhon",
            provinceCode: 52,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hoài Ân",
            code: 544,
            divisionType: "huyện",
            codename: "huyen_hoai_an",
            provinceCode: 52,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phù Mỹ",
            code: 545,
            divisionType: "huyện",
            codename: "huyen_phu_my",
            provinceCode: 52,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vĩnh Thạnh",
            code: 546,
            divisionType: "huyện",
            codename: "huyen_vinh_thanh",
            provinceCode: 52,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tây Sơn",
            code: 547,
            divisionType: "huyện",
            codename: "huyen_tay_son",
            provinceCode: 52,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phù Cát",
            code: 548,
            divisionType: "huyện",
            codename: "huyen_phu_cat",
            provinceCode: 52,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã An Nhơn",
            code: 549,
            divisionType: "thị xã",
            codename: "thi_xa_an_nhon",
            provinceCode: 52,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tuy Phước",
            code: 550,
            divisionType: "huyện",
            codename: "huyen_tuy_phuoc",
            provinceCode: 52,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vân Canh",
            code: 551,
            divisionType: "huyện",
            codename: "huyen_van_canh",
            provinceCode: 52,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Tuy Hoà",
            code: 555,
            divisionType: "thành phố",
            codename: "thanh_pho_tuy_hoa",
            provinceCode: 54,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Sông Cầu",
            code: 557,
            divisionType: "thị xã",
            codename: "thi_xa_song_cau",
            provinceCode: 54,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đồng Xuân",
            code: 558,
            divisionType: "huyện",
            codename: "huyen_dong_xuan",
            provinceCode: 54,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tuy An",
            code: 559,
            divisionType: "huyện",
            codename: "huyen_tuy_an",
            provinceCode: 54,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Sơn Hòa",
            code: 560,
            divisionType: "huyện",
            codename: "huyen_son_hoa",
            provinceCode: 54,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Sông Hinh",
            code: 561,
            divisionType: "huyện",
            codename: "huyen_song_hinh",
            provinceCode: 54,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tây Hoà",
            code: 562,
            divisionType: "huyện",
            codename: "huyen_tay_hoa",
            provinceCode: 54,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phú Hoà",
            code: 563,
            divisionType: "huyện",
            codename: "huyen_phu_hoa",
            provinceCode: 54,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Đông Hòa",
            code: 564,
            divisionType: "thị xã",
            codename: "thi_xa_dong_hoa",
            provinceCode: 54,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Nha Trang",
            code: 568,
            divisionType: "thành phố",
            codename: "thanh_pho_nha_trang",
            provinceCode: 56,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Cam Ranh",
            code: 569,
            divisionType: "thành phố",
            codename: "thanh_pho_cam_ranh",
            provinceCode: 56,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cam Lâm",
            code: 570,
            divisionType: "huyện",
            codename: "huyen_cam_lam",
            provinceCode: 56,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vạn Ninh",
            code: 571,
            divisionType: "huyện",
            codename: "huyen_van_ninh",
            provinceCode: 56,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Ninh Hòa",
            code: 572,
            divisionType: "thị xã",
            codename: "thi_xa_ninh_hoa",
            provinceCode: 56,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Khánh Vĩnh",
            code: 573,
            divisionType: "huyện",
            codename: "huyen_khanh_vinh",
            provinceCode: 56,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Diên Khánh",
            code: 574,
            divisionType: "huyện",
            codename: "huyen_dien_khanh",
            provinceCode: 56,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Khánh Sơn",
            code: 575,
            divisionType: "huyện",
            codename: "huyen_khanh_son",
            provinceCode: 56,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Trường Sa",
            code: 576,
            divisionType: "huyện",
            codename: "huyen_truong_sa",
            provinceCode: 56,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Phan Rang-Tháp Chàm",
            code: 582,
            divisionType: "thành phố",
            codename: "thanh_pho_phan_rang_thap_cham",
            provinceCode: 58,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bác Ái",
            code: 584,
            divisionType: "huyện",
            codename: "huyen_bac_ai",
            provinceCode: 58,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ninh Sơn",
            code: 585,
            divisionType: "huyện",
            codename: "huyen_ninh_son",
            provinceCode: 58,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ninh Hải",
            code: 586,
            divisionType: "huyện",
            codename: "huyen_ninh_hai",
            provinceCode: 58,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ninh Phước",
            code: 587,
            divisionType: "huyện",
            codename: "huyen_ninh_phuoc",
            provinceCode: 58,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thuận Bắc",
            code: 588,
            divisionType: "huyện",
            codename: "huyen_thuan_bac",
            provinceCode: 58,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thuận Nam",
            code: 589,
            divisionType: "huyện",
            codename: "huyen_thuan_nam",
            provinceCode: 58,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Phan Thiết",
            code: 593,
            divisionType: "thành phố",
            codename: "thanh_pho_phan_thiet",
            provinceCode: 60,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã La Gi",
            code: 594,
            divisionType: "thị xã",
            codename: "thi_xa_la_gi",
            provinceCode: 60,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tuy Phong",
            code: 595,
            divisionType: "huyện",
            codename: "huyen_tuy_phong",
            provinceCode: 60,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bắc Bình",
            code: 596,
            divisionType: "huyện",
            codename: "huyen_bac_binh",
            provinceCode: 60,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hàm Thuận Bắc",
            code: 597,
            divisionType: "huyện",
            codename: "huyen_ham_thuan_bac",
            provinceCode: 60,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hàm Thuận Nam",
            code: 598,
            divisionType: "huyện",
            codename: "huyen_ham_thuan_nam",
            provinceCode: 60,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tánh Linh",
            code: 599,
            divisionType: "huyện",
            codename: "huyen_tanh_linh",
            provinceCode: 60,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đức Linh",
            code: 600,
            divisionType: "huyện",
            codename: "huyen_duc_linh",
            provinceCode: 60,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hàm Tân",
            code: 601,
            divisionType: "huyện",
            codename: "huyen_ham_tan",
            provinceCode: 60,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phú Quí",
            code: 602,
            divisionType: "huyện",
            codename: "huyen_phu_qui",
            provinceCode: 60,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Kon Tum",
            code: 608,
            divisionType: "thành phố",
            codename: "thanh_pho_kon_tum",
            provinceCode: 62,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đắk Glei",
            code: 610,
            divisionType: "huyện",
            codename: "huyen_dak_glei",
            provinceCode: 62,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ngọc Hồi",
            code: 611,
            divisionType: "huyện",
            codename: "huyen_ngoc_hoi",
            provinceCode: 62,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đắk Tô",
            code: 612,
            divisionType: "huyện",
            codename: "huyen_dak_to",
            provinceCode: 62,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kon Plông",
            code: 613,
            divisionType: "huyện",
            codename: "huyen_kon_plong",
            provinceCode: 62,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kon Rẫy",
            code: 614,
            divisionType: "huyện",
            codename: "huyen_kon_ray",
            provinceCode: 62,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đắk Hà",
            code: 615,
            divisionType: "huyện",
            codename: "huyen_dak_ha",
            provinceCode: 62,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Sa Thầy",
            code: 616,
            divisionType: "huyện",
            codename: "huyen_sa_thay",
            provinceCode: 62,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tu Mơ Rông",
            code: 617,
            divisionType: "huyện",
            codename: "huyen_tu_mo_rong",
            provinceCode: 62,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ia H' Drai",
            code: 618,
            divisionType: "huyện",
            codename: "huyen_ia_h_drai",
            provinceCode: 62,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Pleiku",
            code: 622,
            divisionType: "thành phố",
            codename: "thanh_pho_pleiku",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã An Khê",
            code: 623,
            divisionType: "thị xã",
            codename: "thi_xa_an_khe",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Ayun Pa",
            code: 624,
            divisionType: "thị xã",
            codename: "thi_xa_ayun_pa",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện KBang",
            code: 625,
            divisionType: "huyện",
            codename: "huyen_kbang",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đăk Đoa",
            code: 626,
            divisionType: "huyện",
            codename: "huyen_dak_doa",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Chư Păh",
            code: 627,
            divisionType: "huyện",
            codename: "huyen_chu_pah",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ia Grai",
            code: 628,
            divisionType: "huyện",
            codename: "huyen_ia_grai",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mang Yang",
            code: 629,
            divisionType: "huyện",
            codename: "huyen_mang_yang",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kông Chro",
            code: 630,
            divisionType: "huyện",
            codename: "huyen_kong_chro",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đức Cơ",
            code: 631,
            divisionType: "huyện",
            codename: "huyen_duc_co",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Chư Prông",
            code: 632,
            divisionType: "huyện",
            codename: "huyen_chu_prong",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Chư Sê",
            code: 633,
            divisionType: "huyện",
            codename: "huyen_chu_se",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đăk Pơ",
            code: 634,
            divisionType: "huyện",
            codename: "huyen_dak_po",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ia Pa",
            code: 635,
            divisionType: "huyện",
            codename: "huyen_ia_pa",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Krông Pa",
            code: 637,
            divisionType: "huyện",
            codename: "huyen_krong_pa",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phú Thiện",
            code: 638,
            divisionType: "huyện",
            codename: "huyen_phu_thien",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Chư Pưh",
            code: 639,
            divisionType: "huyện",
            codename: "huyen_chu_puh",
            provinceCode: 64,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Buôn Ma Thuột",
            code: 643,
            divisionType: "thành phố",
            codename: "thanh_pho_buon_ma_thuot",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Buôn Hồ",
            code: 644,
            divisionType: "thị xã",
            codename: "thi_xa_buon_ho",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ea H'leo",
            code: 645,
            divisionType: "huyện",
            codename: "huyen_ea_hleo",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ea Súp",
            code: 646,
            divisionType: "huyện",
            codename: "huyen_ea_sup",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Buôn Đôn",
            code: 647,
            divisionType: "huyện",
            codename: "huyen_buon_don",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cư M'gar",
            code: 648,
            divisionType: "huyện",
            codename: "huyen_cu_mgar",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Krông Búk",
            code: 649,
            divisionType: "huyện",
            codename: "huyen_krong_buk",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Krông Năng",
            code: 650,
            divisionType: "huyện",
            codename: "huyen_krong_nang",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ea Kar",
            code: 651,
            divisionType: "huyện",
            codename: "huyen_ea_kar",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện M'Đrắk",
            code: 652,
            divisionType: "huyện",
            codename: "huyen_mdrak",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Krông Bông",
            code: 653,
            divisionType: "huyện",
            codename: "huyen_krong_bong",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Krông Pắc",
            code: 654,
            divisionType: "huyện",
            codename: "huyen_krong_pac",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Krông A Na",
            code: 655,
            divisionType: "huyện",
            codename: "huyen_krong_a_na",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lắk",
            code: 656,
            divisionType: "huyện",
            codename: "huyen_lak",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cư Kuin",
            code: 657,
            divisionType: "huyện",
            codename: "huyen_cu_kuin",
            provinceCode: 66,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Gia Nghĩa",
            code: 660,
            divisionType: "thành phố",
            codename: "thanh_pho_gia_nghia",
            provinceCode: 67,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đăk Glong",
            code: 661,
            divisionType: "huyện",
            codename: "huyen_dak_glong",
            provinceCode: 67,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cư Jút",
            code: 662,
            divisionType: "huyện",
            codename: "huyen_cu_jut",
            provinceCode: 67,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đắk Mil",
            code: 663,
            divisionType: "huyện",
            codename: "huyen_dak_mil",
            provinceCode: 67,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Krông Nô",
            code: 664,
            divisionType: "huyện",
            codename: "huyen_krong_no",
            provinceCode: 67,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đắk Song",
            code: 665,
            divisionType: "huyện",
            codename: "huyen_dak_song",
            provinceCode: 67,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đắk R'Lấp",
            code: 666,
            divisionType: "huyện",
            codename: "huyen_dak_rlap",
            provinceCode: 67,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tuy Đức",
            code: 667,
            divisionType: "huyện",
            codename: "huyen_tuy_duc",
            provinceCode: 67,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Đà Lạt",
            code: 672,
            divisionType: "thành phố",
            codename: "thanh_pho_da_lat",
            provinceCode: 68,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Bảo Lộc",
            code: 673,
            divisionType: "thành phố",
            codename: "thanh_pho_bao_loc",
            provinceCode: 68,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đam Rông",
            code: 674,
            divisionType: "huyện",
            codename: "huyen_dam_rong",
            provinceCode: 68,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lạc Dương",
            code: 675,
            divisionType: "huyện",
            codename: "huyen_lac_duong",
            provinceCode: 68,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lâm Hà",
            code: 676,
            divisionType: "huyện",
            codename: "huyen_lam_ha",
            provinceCode: 68,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đơn Dương",
            code: 677,
            divisionType: "huyện",
            codename: "huyen_don_duong",
            provinceCode: 68,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đức Trọng",
            code: 678,
            divisionType: "huyện",
            codename: "huyen_duc_trong",
            provinceCode: 68,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Di Linh",
            code: 679,
            divisionType: "huyện",
            codename: "huyen_di_linh",
            provinceCode: 68,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bảo Lâm",
            code: 680,
            divisionType: "huyện",
            codename: "huyen_bao_lam",
            provinceCode: 68,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đạ Huoai",
            code: 681,
            divisionType: "huyện",
            codename: "huyen_da_huoai",
            provinceCode: 68,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đạ Tẻh",
            code: 682,
            divisionType: "huyện",
            codename: "huyen_da_teh",
            provinceCode: 68,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cát Tiên",
            code: 683,
            divisionType: "huyện",
            codename: "huyen_cat_tien",
            provinceCode: 68,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Phước Long",
            code: 688,
            divisionType: "thị xã",
            codename: "thi_xa_phuoc_long",
            provinceCode: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Đồng Xoài",
            code: 689,
            divisionType: "thành phố",
            codename: "thanh_pho_dong_xoai",
            provinceCode: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Bình Long",
            code: 690,
            divisionType: "thị xã",
            codename: "thi_xa_binh_long",
            provinceCode: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bù Gia Mập",
            code: 691,
            divisionType: "huyện",
            codename: "huyen_bu_gia_map",
            provinceCode: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lộc Ninh",
            code: 692,
            divisionType: "huyện",
            codename: "huyen_loc_ninh",
            provinceCode: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bù Đốp",
            code: 693,
            divisionType: "huyện",
            codename: "huyen_bu_dop",
            provinceCode: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hớn Quản",
            code: 694,
            divisionType: "huyện",
            codename: "huyen_hon_quan",
            provinceCode: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đồng Phú",
            code: 695,
            divisionType: "huyện",
            codename: "huyen_dong_phu",
            provinceCode: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bù Đăng",
            code: 696,
            divisionType: "huyện",
            codename: "huyen_bu_dang",
            provinceCode: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Chơn Thành",
            code: 697,
            divisionType: "huyện",
            codename: "huyen_chon_thanh",
            provinceCode: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phú Riềng",
            code: 698,
            divisionType: "huyện",
            codename: "huyen_phu_rieng",
            provinceCode: 70,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Tây Ninh",
            code: 703,
            divisionType: "thành phố",
            codename: "thanh_pho_tay_ninh",
            provinceCode: 72,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Biên",
            code: 705,
            divisionType: "huyện",
            codename: "huyen_tan_bien",
            provinceCode: 72,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Châu",
            code: 706,
            divisionType: "huyện",
            codename: "huyen_tan_chau",
            provinceCode: 72,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Dương Minh Châu",
            code: 707,
            divisionType: "huyện",
            codename: "huyen_duong_minh_chau",
            provinceCode: 72,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Châu Thành",
            code: 708,
            divisionType: "huyện",
            codename: "huyen_chau_thanh",
            provinceCode: 72,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Hòa Thành",
            code: 709,
            divisionType: "thị xã",
            codename: "thi_xa_hoa_thanh",
            provinceCode: 72,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Gò Dầu",
            code: 710,
            divisionType: "huyện",
            codename: "huyen_go_dau",
            provinceCode: 72,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bến Cầu",
            code: 711,
            divisionType: "huyện",
            codename: "huyen_ben_cau",
            provinceCode: 72,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Trảng Bàng",
            code: 712,
            divisionType: "thị xã",
            codename: "thi_xa_trang_bang",
            provinceCode: 72,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Thủ Dầu Một",
            code: 718,
            divisionType: "thành phố",
            codename: "thanh_pho_thu_dau_mot",
            provinceCode: 74,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bàu Bàng",
            code: 719,
            divisionType: "huyện",
            codename: "huyen_bau_bang",
            provinceCode: 74,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Dầu Tiếng",
            code: 720,
            divisionType: "huyện",
            codename: "huyen_dau_tieng",
            provinceCode: 74,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Bến Cát",
            code: 721,
            divisionType: "thị xã",
            codename: "thi_xa_ben_cat",
            provinceCode: 74,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phú Giáo",
            code: 722,
            divisionType: "huyện",
            codename: "huyen_phu_giao",
            provinceCode: 74,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Tân Uyên",
            code: 723,
            divisionType: "thị xã",
            codename: "thi_xa_tan_uyen",
            provinceCode: 74,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Dĩ An",
            code: 724,
            divisionType: "thành phố",
            codename: "thanh_pho_di_an",
            provinceCode: 74,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Thuận An",
            code: 725,
            divisionType: "thành phố",
            codename: "thanh_pho_thuan_an",
            provinceCode: 74,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bắc Tân Uyên",
            code: 726,
            divisionType: "huyện",
            codename: "huyen_bac_tan_uyen",
            provinceCode: 74,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Biên Hòa",
            code: 731,
            divisionType: "thành phố",
            codename: "thanh_pho_bien_hoa",
            provinceCode: 75,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Long Khánh",
            code: 732,
            divisionType: "thành phố",
            codename: "thanh_pho_long_khanh",
            provinceCode: 75,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Phú",
            code: 734,
            divisionType: "huyện",
            codename: "huyen_tan_phu",
            provinceCode: 75,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vĩnh Cửu",
            code: 735,
            divisionType: "huyện",
            codename: "huyen_vinh_cuu",
            provinceCode: 75,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Định Quán",
            code: 736,
            divisionType: "huyện",
            codename: "huyen_dinh_quan",
            provinceCode: 75,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Trảng Bom",
            code: 737,
            divisionType: "huyện",
            codename: "huyen_trang_bom",
            provinceCode: 75,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thống Nhất",
            code: 738,
            divisionType: "huyện",
            codename: "huyen_thong_nhat",
            provinceCode: 75,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cẩm Mỹ",
            code: 739,
            divisionType: "huyện",
            codename: "huyen_cam_my",
            provinceCode: 75,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Long Thành",
            code: 740,
            divisionType: "huyện",
            codename: "huyen_long_thanh",
            provinceCode: 75,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Xuân Lộc",
            code: 741,
            divisionType: "huyện",
            codename: "huyen_xuan_loc",
            provinceCode: 75,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nhơn Trạch",
            code: 742,
            divisionType: "huyện",
            codename: "huyen_nhon_trach",
            provinceCode: 75,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Vũng Tàu",
            code: 747,
            divisionType: "thành phố",
            codename: "thanh_pho_vung_tau",
            provinceCode: 77,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Bà Rịa",
            code: 748,
            divisionType: "thành phố",
            codename: "thanh_pho_ba_ria",
            provinceCode: 77,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Châu Đức",
            code: 750,
            divisionType: "huyện",
            codename: "huyen_chau_duc",
            provinceCode: 77,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Xuyên Mộc",
            code: 751,
            divisionType: "huyện",
            codename: "huyen_xuyen_moc",
            provinceCode: 77,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Long Điền",
            code: 752,
            divisionType: "huyện",
            codename: "huyen_long_dien",
            provinceCode: 77,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đất Đỏ",
            code: 753,
            divisionType: "huyện",
            codename: "huyen_dat_do",
            provinceCode: 77,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Phú Mỹ",
            code: 754,
            divisionType: "thị xã",
            codename: "thi_xa_phu_my",
            provinceCode: 77,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Côn Đảo",
            code: 755,
            divisionType: "huyện",
            codename: "huyen_con_dao",
            provinceCode: 77,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận 1",
            code: 760,
            divisionType: "quận",
            codename: "quan_1",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận 12",
            code: 761,
            divisionType: "quận",
            codename: "quan_12",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Gò Vấp",
            code: 764,
            divisionType: "quận",
            codename: "quan_go_vap",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Bình Thạnh",
            code: 765,
            divisionType: "quận",
            codename: "quan_binh_thanh",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Tân Bình",
            code: 766,
            divisionType: "quận",
            codename: "quan_tan_binh",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Tân Phú",
            code: 767,
            divisionType: "quận",
            codename: "quan_tan_phu",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Phú Nhuận",
            code: 768,
            divisionType: "quận",
            codename: "quan_phu_nhuan",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Thủ Đức",
            code: 769,
            divisionType: "thành phố",
            codename: "thanh_pho_thu_duc",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận 3",
            code: 770,
            divisionType: "quận",
            codename: "quan_3",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận 10",
            code: 771,
            divisionType: "quận",
            codename: "quan_10",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận 11",
            code: 772,
            divisionType: "quận",
            codename: "quan_11",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận 4",
            code: 773,
            divisionType: "quận",
            codename: "quan_4",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận 5",
            code: 774,
            divisionType: "quận",
            codename: "quan_5",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận 6",
            code: 775,
            divisionType: "quận",
            codename: "quan_6",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận 8",
            code: 776,
            divisionType: "quận",
            codename: "quan_8",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Bình Tân",
            code: 777,
            divisionType: "quận",
            codename: "quan_binh_tan",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận 7",
            code: 778,
            divisionType: "quận",
            codename: "quan_7",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Củ Chi",
            code: 783,
            divisionType: "huyện",
            codename: "huyen_cu_chi",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hóc Môn",
            code: 784,
            divisionType: "huyện",
            codename: "huyen_hoc_mon",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bình Chánh",
            code: 785,
            divisionType: "huyện",
            codename: "huyen_binh_chanh",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Nhà Bè",
            code: 786,
            divisionType: "huyện",
            codename: "huyen_nha_be",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cần Giờ",
            code: 787,
            divisionType: "huyện",
            codename: "huyen_can_gio",
            provinceCode: 79,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Tân An",
            code: 794,
            divisionType: "thành phố",
            codename: "thanh_pho_tan_an",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Kiến Tường",
            code: 795,
            divisionType: "thị xã",
            codename: "thi_xa_kien_tuong",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Hưng",
            code: 796,
            divisionType: "huyện",
            codename: "huyen_tan_hung",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vĩnh Hưng",
            code: 797,
            divisionType: "huyện",
            codename: "huyen_vinh_hung",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mộc Hóa",
            code: 798,
            divisionType: "huyện",
            codename: "huyen_moc_hoa",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Thạnh",
            code: 799,
            divisionType: "huyện",
            codename: "huyen_tan_thanh",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thạnh Hóa",
            code: 800,
            divisionType: "huyện",
            codename: "huyen_thanh_hoa",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đức Huệ",
            code: 801,
            divisionType: "huyện",
            codename: "huyen_duc_hue",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đức Hòa",
            code: 802,
            divisionType: "huyện",
            codename: "huyen_duc_hoa",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bến Lức",
            code: 803,
            divisionType: "huyện",
            codename: "huyen_ben_luc",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thủ Thừa",
            code: 804,
            divisionType: "huyện",
            codename: "huyen_thu_thua",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Trụ",
            code: 805,
            divisionType: "huyện",
            codename: "huyen_tan_tru",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cần Đước",
            code: 806,
            divisionType: "huyện",
            codename: "huyen_can_duoc",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cần Giuộc",
            code: 807,
            divisionType: "huyện",
            codename: "huyen_can_giuoc",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Châu Thành",
            code: 808,
            divisionType: "huyện",
            codename: "huyen_chau_thanh",
            provinceCode: 80,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Mỹ Tho",
            code: 815,
            divisionType: "thành phố",
            codename: "thanh_pho_my_tho",
            provinceCode: 82,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Gò Công",
            code: 816,
            divisionType: "thị xã",
            codename: "thi_xa_go_cong",
            provinceCode: 82,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Cai Lậy",
            code: 817,
            divisionType: "thị xã",
            codename: "thi_xa_cai_lay",
            provinceCode: 82,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Phước",
            code: 818,
            divisionType: "huyện",
            codename: "huyen_tan_phuoc",
            provinceCode: 82,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cái Bè",
            code: 819,
            divisionType: "huyện",
            codename: "huyen_cai_be",
            provinceCode: 82,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cai Lậy",
            code: 820,
            divisionType: "huyện",
            codename: "huyen_cai_lay",
            provinceCode: 82,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Châu Thành",
            code: 821,
            divisionType: "huyện",
            codename: "huyen_chau_thanh",
            provinceCode: 82,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Chợ Gạo",
            code: 822,
            divisionType: "huyện",
            codename: "huyen_cho_gao",
            provinceCode: 82,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Gò Công Tây",
            code: 823,
            divisionType: "huyện",
            codename: "huyen_go_cong_tay",
            provinceCode: 82,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Gò Công Đông",
            code: 824,
            divisionType: "huyện",
            codename: "huyen_go_cong_dong",
            provinceCode: 82,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Phú Đông",
            code: 825,
            divisionType: "huyện",
            codename: "huyen_tan_phu_dong",
            provinceCode: 82,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Bến Tre",
            code: 829,
            divisionType: "thành phố",
            codename: "thanh_pho_ben_tre",
            provinceCode: 83,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Châu Thành",
            code: 831,
            divisionType: "huyện",
            codename: "huyen_chau_thanh",
            provinceCode: 83,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Chợ Lách",
            code: 832,
            divisionType: "huyện",
            codename: "huyen_cho_lach",
            provinceCode: 83,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mỏ Cày Nam",
            code: 833,
            divisionType: "huyện",
            codename: "huyen_mo_cay_nam",
            provinceCode: 83,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Giồng Trôm",
            code: 834,
            divisionType: "huyện",
            codename: "huyen_giong_trom",
            provinceCode: 83,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bình Đại",
            code: 835,
            divisionType: "huyện",
            codename: "huyen_binh_dai",
            provinceCode: 83,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ba Tri",
            code: 836,
            divisionType: "huyện",
            codename: "huyen_ba_tri",
            provinceCode: 83,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thạnh Phú",
            code: 837,
            divisionType: "huyện",
            codename: "huyen_thanh_phu",
            provinceCode: 83,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mỏ Cày Bắc",
            code: 838,
            divisionType: "huyện",
            codename: "huyen_mo_cay_bac",
            provinceCode: 83,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Trà Vinh",
            code: 842,
            divisionType: "thành phố",
            codename: "thanh_pho_tra_vinh",
            provinceCode: 84,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Càng Long",
            code: 844,
            divisionType: "huyện",
            codename: "huyen_cang_long",
            provinceCode: 84,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cầu Kè",
            code: 845,
            divisionType: "huyện",
            codename: "huyen_cau_ke",
            provinceCode: 84,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tiểu Cần",
            code: 846,
            divisionType: "huyện",
            codename: "huyen_tieu_can",
            provinceCode: 84,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Châu Thành",
            code: 847,
            divisionType: "huyện",
            codename: "huyen_chau_thanh",
            provinceCode: 84,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cầu Ngang",
            code: 848,
            divisionType: "huyện",
            codename: "huyen_cau_ngang",
            provinceCode: 84,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Trà Cú",
            code: 849,
            divisionType: "huyện",
            codename: "huyen_tra_cu",
            provinceCode: 84,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Duyên Hải",
            code: 850,
            divisionType: "huyện",
            codename: "huyen_duyen_hai",
            provinceCode: 84,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Duyên Hải",
            code: 851,
            divisionType: "thị xã",
            codename: "thi_xa_duyen_hai",
            provinceCode: 84,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Vĩnh Long",
            code: 855,
            divisionType: "thành phố",
            codename: "thanh_pho_vinh_long",
            provinceCode: 86,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Long Hồ",
            code: 857,
            divisionType: "huyện",
            codename: "huyen_long_ho",
            provinceCode: 86,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mang Thít",
            code: 858,
            divisionType: "huyện",
            codename: "huyen_mang_thit",
            provinceCode: 86,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vũng Liêm",
            code: 859,
            divisionType: "huyện",
            codename: "huyen_vung_liem",
            provinceCode: 86,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tam Bình",
            code: 860,
            divisionType: "huyện",
            codename: "huyen_tam_binh",
            provinceCode: 86,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Bình Minh",
            code: 861,
            divisionType: "thị xã",
            codename: "thi_xa_binh_minh",
            provinceCode: 86,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Trà Ôn",
            code: 862,
            divisionType: "huyện",
            codename: "huyen_tra_on",
            provinceCode: 86,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Bình Tân",
            code: 863,
            divisionType: "huyện",
            codename: "huyen_binh_tan",
            provinceCode: 86,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Cao Lãnh",
            code: 866,
            divisionType: "thành phố",
            codename: "thanh_pho_cao_lanh",
            provinceCode: 87,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Sa Đéc",
            code: 867,
            divisionType: "thành phố",
            codename: "thanh_pho_sa_dec",
            provinceCode: 87,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Hồng Ngự",
            code: 868,
            divisionType: "thành phố",
            codename: "thanh_pho_hong_ngu",
            provinceCode: 87,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Hồng",
            code: 869,
            divisionType: "huyện",
            codename: "huyen_tan_hong",
            provinceCode: 87,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hồng Ngự",
            code: 870,
            divisionType: "huyện",
            codename: "huyen_hong_ngu",
            provinceCode: 87,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tam Nông",
            code: 871,
            divisionType: "huyện",
            codename: "huyen_tam_nong",
            provinceCode: 87,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tháp Mười",
            code: 872,
            divisionType: "huyện",
            codename: "huyen_thap_muoi",
            provinceCode: 87,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cao Lãnh",
            code: 873,
            divisionType: "huyện",
            codename: "huyen_cao_lanh",
            provinceCode: 87,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thanh Bình",
            code: 874,
            divisionType: "huyện",
            codename: "huyen_thanh_binh",
            provinceCode: 87,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lấp Vò",
            code: 875,
            divisionType: "huyện",
            codename: "huyen_lap_vo",
            provinceCode: 87,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Lai Vung",
            code: 876,
            divisionType: "huyện",
            codename: "huyen_lai_vung",
            provinceCode: 87,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Châu Thành",
            code: 877,
            divisionType: "huyện",
            codename: "huyen_chau_thanh",
            provinceCode: 87,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Long Xuyên",
            code: 883,
            divisionType: "thành phố",
            codename: "thanh_pho_long_xuyen",
            provinceCode: 89,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Châu Đốc",
            code: 884,
            divisionType: "thành phố",
            codename: "thanh_pho_chau_doc",
            provinceCode: 89,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện An Phú",
            code: 886,
            divisionType: "huyện",
            codename: "huyen_an_phu",
            provinceCode: 89,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Tân Châu",
            code: 887,
            divisionType: "thị xã",
            codename: "thi_xa_tan_chau",
            provinceCode: 89,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phú Tân",
            code: 888,
            divisionType: "huyện",
            codename: "huyen_phu_tan",
            provinceCode: 89,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Châu Phú",
            code: 889,
            divisionType: "huyện",
            codename: "huyen_chau_phu",
            provinceCode: 89,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tịnh Biên",
            code: 890,
            divisionType: "huyện",
            codename: "huyen_tinh_bien",
            provinceCode: 89,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tri Tôn",
            code: 891,
            divisionType: "huyện",
            codename: "huyen_tri_ton",
            provinceCode: 89,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Châu Thành",
            code: 892,
            divisionType: "huyện",
            codename: "huyen_chau_thanh",
            provinceCode: 89,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Chợ Mới",
            code: 893,
            divisionType: "huyện",
            codename: "huyen_cho_moi",
            provinceCode: 89,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thoại Sơn",
            code: 894,
            divisionType: "huyện",
            codename: "huyen_thoai_son",
            provinceCode: 89,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Rạch Giá",
            code: 899,
            divisionType: "thành phố",
            codename: "thanh_pho_rach_gia",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Hà Tiên",
            code: 900,
            divisionType: "thành phố",
            codename: "thanh_pho_ha_tien",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kiên Lương",
            code: 902,
            divisionType: "huyện",
            codename: "huyen_kien_luong",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hòn Đất",
            code: 903,
            divisionType: "huyện",
            codename: "huyen_hon_dat",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Tân Hiệp",
            code: 904,
            divisionType: "huyện",
            codename: "huyen_tan_hiep",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Châu Thành",
            code: 905,
            divisionType: "huyện",
            codename: "huyen_chau_thanh",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Giồng Riềng",
            code: 906,
            divisionType: "huyện",
            codename: "huyen_giong_rieng",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Gò Quao",
            code: 907,
            divisionType: "huyện",
            codename: "huyen_go_quao",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện An Biên",
            code: 908,
            divisionType: "huyện",
            codename: "huyen_an_bien",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện An Minh",
            code: 909,
            divisionType: "huyện",
            codename: "huyen_an_minh",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vĩnh Thuận",
            code: 910,
            divisionType: "huyện",
            codename: "huyen_vinh_thuan",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Phú Quốc",
            code: 911,
            divisionType: "thành phố",
            codename: "thanh_pho_phu_quoc",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kiên Hải",
            code: 912,
            divisionType: "huyện",
            codename: "huyen_kien_hai",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện U Minh Thượng",
            code: 913,
            divisionType: "huyện",
            codename: "huyen_u_minh_thuong",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Giang Thành",
            code: 914,
            divisionType: "huyện",
            codename: "huyen_giang_thanh",
            provinceCode: 91,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Ninh Kiều",
            code: 916,
            divisionType: "quận",
            codename: "quan_ninh_kieu",
            provinceCode: 92,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Ô Môn",
            code: 917,
            divisionType: "quận",
            codename: "quan_o_mon",
            provinceCode: 92,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Bình Thuỷ",
            code: 918,
            divisionType: "quận",
            codename: "quan_binh_thuy",
            provinceCode: 92,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Cái Răng",
            code: 919,
            divisionType: "quận",
            codename: "quan_cai_rang",
            provinceCode: 92,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Quận Thốt Nốt",
            code: 923,
            divisionType: "quận",
            codename: "quan_thot_not",
            provinceCode: 92,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vĩnh Thạnh",
            code: 924,
            divisionType: "huyện",
            codename: "huyen_vinh_thanh",
            provinceCode: 92,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cờ Đỏ",
            code: 925,
            divisionType: "huyện",
            codename: "huyen_co_do",
            provinceCode: 92,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phong Điền",
            code: 926,
            divisionType: "huyện",
            codename: "huyen_phong_dien",
            provinceCode: 92,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thới Lai",
            code: 927,
            divisionType: "huyện",
            codename: "huyen_thoi_lai",
            provinceCode: 92,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Vị Thanh",
            code: 930,
            divisionType: "thành phố",
            codename: "thanh_pho_vi_thanh",
            provinceCode: 93,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Ngã Bảy",
            code: 931,
            divisionType: "thành phố",
            codename: "thanh_pho_nga_bay",
            provinceCode: 93,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Châu Thành A",
            code: 932,
            divisionType: "huyện",
            codename: "huyen_chau_thanh_a",
            provinceCode: 93,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Châu Thành",
            code: 933,
            divisionType: "huyện",
            codename: "huyen_chau_thanh",
            provinceCode: 93,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phụng Hiệp",
            code: 934,
            divisionType: "huyện",
            codename: "huyen_phung_hiep",
            provinceCode: 93,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vị Thuỷ",
            code: 935,
            divisionType: "huyện",
            codename: "huyen_vi_thuy",
            provinceCode: 93,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Long Mỹ",
            code: 936,
            divisionType: "huyện",
            codename: "huyen_long_my",
            provinceCode: 93,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Long Mỹ",
            code: 937,
            divisionType: "thị xã",
            codename: "thi_xa_long_my",
            provinceCode: 93,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Sóc Trăng",
            code: 941,
            divisionType: "thành phố",
            codename: "thanh_pho_soc_trang",
            provinceCode: 94,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Châu Thành",
            code: 942,
            divisionType: "huyện",
            codename: "huyen_chau_thanh",
            provinceCode: 94,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Kế Sách",
            code: 943,
            divisionType: "huyện",
            codename: "huyen_ke_sach",
            provinceCode: 94,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mỹ Tú",
            code: 944,
            divisionType: "huyện",
            codename: "huyen_my_tu",
            provinceCode: 94,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cù Lao Dung",
            code: 945,
            divisionType: "huyện",
            codename: "huyen_cu_lao_dung",
            provinceCode: 94,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Long Phú",
            code: 946,
            divisionType: "huyện",
            codename: "huyen_long_phu",
            provinceCode: 94,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Mỹ Xuyên",
            code: 947,
            divisionType: "huyện",
            codename: "huyen_my_xuyen",
            provinceCode: 94,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Ngã Năm",
            code: 948,
            divisionType: "thị xã",
            codename: "thi_xa_nga_nam",
            provinceCode: 94,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thạnh Trị",
            code: 949,
            divisionType: "huyện",
            codename: "huyen_thanh_tri",
            provinceCode: 94,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Vĩnh Châu",
            code: 950,
            divisionType: "thị xã",
            codename: "thi_xa_vinh_chau",
            provinceCode: 94,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Trần Đề",
            code: 951,
            divisionType: "huyện",
            codename: "huyen_tran_de",
            provinceCode: 94,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Bạc Liêu",
            code: 954,
            divisionType: "thành phố",
            codename: "thanh_pho_bac_lieu",
            provinceCode: 95,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hồng Dân",
            code: 956,
            divisionType: "huyện",
            codename: "huyen_hong_dan",
            provinceCode: 95,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phước Long",
            code: 957,
            divisionType: "huyện",
            codename: "huyen_phuoc_long",
            provinceCode: 95,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Vĩnh Lợi",
            code: 958,
            divisionType: "huyện",
            codename: "huyen_vinh_loi",
            provinceCode: 95,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thị xã Giá Rai",
            code: 959,
            divisionType: "thị xã",
            codename: "thi_xa_gia_rai",
            provinceCode: 95,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đông Hải",
            code: 960,
            divisionType: "huyện",
            codename: "huyen_dong_hai",
            provinceCode: 95,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Hoà Bình",
            code: 961,
            divisionType: "huyện",
            codename: "huyen_hoa_binh",
            provinceCode: 95,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Thành phố Cà Mau",
            code: 964,
            divisionType: "thành phố",
            codename: "thanh_pho_ca_mau",
            provinceCode: 96,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện U Minh",
            code: 966,
            divisionType: "huyện",
            codename: "huyen_u_minh",
            provinceCode: 96,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Thới Bình",
            code: 967,
            divisionType: "huyện",
            codename: "huyen_thoi_binh",
            provinceCode: 96,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Trần Văn Thời",
            code: 968,
            divisionType: "huyện",
            codename: "huyen_tran_van_thoi",
            provinceCode: 96,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Cái Nước",
            code: 969,
            divisionType: "huyện",
            codename: "huyen_cai_nuoc",
            provinceCode: 96,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Đầm Dơi",
            code: 970,
            divisionType: "huyện",
            codename: "huyen_dam_doi",
            provinceCode: 96,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Năm Căn",
            code: 971,
            divisionType: "huyện",
            codename: "huyen_nam_can",
            provinceCode: 96,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Phú Tân",
            code: 972,
            divisionType: "huyện",
            codename: "huyen_phu_tan",
            provinceCode: 96,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Huyện Ngọc Hiển",
            code: 973,
            divisionType: "huyện",
            codename: "huyen_ngoc_hien",
            provinceCode: 96,
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Districts', null, {});
    }
};