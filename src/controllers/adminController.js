import adminService from '../services/adminService';
const sgMail = require("@sendgrid/mail");
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

let confirmCreateHouse = async (req, res) => {
    let inputId = req.body.houseId
    if (!inputId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await adminService.confirmCreateHouse(inputId);
    if (message.errCode === 0) {
        const msg = {
            to: message.emailOwner,
            from: process.env.SENDGRID_EMAIL,
            subject: "Create Successfully",
            html: `
              <h1>Accepted Create House</h1>
              <p>Your request to create a home is accepted</p>
              <p>Thank you for using our website</p>
              `,
        }
        sgMail
            .send(msg)
            .then(() => { }, error => {
                console.error(error);
                if (error.response) {
                    console.error(error.response.body)
                }
            });
        delete message.emailOwner;
    }
    return res.status(200).json(message);
}

let getAllHouseWaitCreate = async (req, res) => {
    let message = await adminService.getAllHouseWaitCreate();
    return res.status(200).json(message);
}

let getAllHouseWaitUpdate = async (req, res) => {
    let message = await adminService.getAllHouseWaitUpdate();
    return res.status(200).json(message);
}

let confirmUpdateHouse = async (req, res) => {
    let inputId = req.query.houseId
    if (!inputId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await adminService.confirmUpdateHouse(inputId);
    if (message.errCode === 0) {
        const msg = {
            to: message.emailOwner,
            from: process.env.SENDGRID_EMAIL,
            subject: "Update Successfully",
            html: `
              <h1>Accepted Update House</h1>
              <p>Your request to update a house is accepted</p>
              <p>Thank you for using our website</p>
              `,
        }
        sgMail
            .send(msg)
            .then(() => { }, error => {
                console.error(error);
                if (error.response) {
                    console.error(error.response.body)
                }
            });
        delete message.emailOwner;
    }
    return res.status(200).json(message);
}

let rejectCreateHouse = async (req, res) => {
    let inputId = req.query.houseId
    if (!inputId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await adminService.rejectCreateHouse(inputId);
    if (message.errCode === 0) {
        const msg = {
            to: message.emailOwner,
            from: process.env.SENDGRID_EMAIL,
            subject: "Reject Create House",
            html: `
              <h1>Reject Create House</h1>
              <p>Your request to create a house is reject</p>
              <p>You should update the appropriate information to be approved</p>
              `,
        }
        sgMail
            .send(msg)
            .then(() => { }, error => {
                console.error(error);
                if (error.response) {
                    console.error(error.response.body)
                }
            });
        delete message.emailOwner;
    }
    return res.status(200).json(message);
}

let rejectUpdateHouse = async (req, res) => {
    let inputId = req.query.houseId
    if (!inputId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await adminService.rejectUpdateHouse(inputId);
    if (message.errCode === 0) {
        const msg = {
            to: message.emailOwner,
            from: process.env.SENDGRID_EMAIL,
            subject: "Reject Update House",
            html: `
              <h1>Reject Update House</h1>
              <p>Your request to update a house is reject</p>
              <p>You should update the appropriate information to be approved</p>
              `,
        }
        sgMail
            .send(msg)
            .then(() => { }, error => {
                console.error(error);
                if (error.response) {
                    console.error(error.response.body)
                }
            });
        delete message.emailOwner;
    }
    return res.status(200).json(message);
}

let getAllOwnerHouse = async (req, res) => {
    let message = await adminService.getAllOwnerHouse();
    return res.status(200).json(message);
}

let getAllCustomer = async (req, res) => {
    let message = await adminService.getAllCustomer();
    return res.status(200).json(message);
}

let getAllUser = async (req, res) => {
    let message = await adminService.getAllUser();
    return res.status(200).json(message);
}

//Controller Contract
let partialPaymentContract = async (req, res) => {
    let contractId = req.query.contractId
    if (!contractId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await adminService.partialPaymentContract(contractId);
    if (message.errCode === 0) {
        // Gửi mail cho khách về thông tin chủ nhà
        const msg = {
            to: message.data.customerData.email,
            from: process.env.SENDGRID_EMAIL,
            subject: "Đặt cọc thành công",
            html: `
              <h1>Yêu cầu đặt nhà của bạn đã được chấp thuận</h1>
              <h2>Thông tin hợp đồng</h2>
              <p>Căn nhà : ${message.data.contractData.house.data.name}</p>
              <p>Địa chỉ: ${message.data.contractData.house.data.House_Info.address}</p>
              <p>Thời gian: Từ ${message.data.contractData.contract.arriveDate} đến ${message.data.contractData.contract.leftDate} </p>
              <p>Giá: ${message.data.contractData.contract.price} VND</p>
              <p>Trạng thái: ${message.data.contractData.contract.status}</p>
              <h2>Bạn có thể liên hệ với chủ nhà với thông tin sau để biết thêm thông tin chi tiết căn nhà và nhận nhà</h2>
              <p>Họ tên chủ nhà : ${message.data.ownerData.lastName} ${message.data.ownerData.firstName}</p>
              <p>Số điện thoại : ${message.data.ownerData.phone}</p>
              <p>Email : ${message.data.ownerData.email}</p>
              <h2>Bạn vui lòng thanh toán nốt phần tiền còn lại của hợp đồng trước ngày ${message.data.contractData.contract.arriveDate} để hoàn tất yêu cầu đặt nhà</h2>
              `,
        }
        sgMail
            .send(msg)
            .then(() => { }, error => {
                console.error(error);
                if (error.response) {
                    console.error(error.response.body)
                }
            });
        // Gửi mail cho chủ nhà về thông tin của khách
        const msg1 = {
            to: message.data.ownerData.email,
            from: process.env.SENDGRID_EMAIL,
            subject: "Thông tin đặt nhà",
            html: `
                <h1>Một căn nhà của bạn đã được đặt</h1>
                <h2>Thông tin hợp đồng</h2>
                <p>Căn nhà : ${message.data.contractData.house.data.name}</p>
                <p>Địa chỉ: ${message.data.contractData.house.data.House_Info.address}</p>
                <p>Thời gian: Từ ${message.data.contractData.contract.arriveDate} đến ${message.data.contractData.contract.leftDate} </p>
                <p>Giá: ${message.data.contractData.contract.price} VND</p>
                <p>Trạng thái: ${message.data.contractData.contract.status}</p>
                <h2>Thông tin khách đặt</h2>
                <p>Họ tên khách : ${message.data.customerData.lastName} ${message.data.customerData.firstName}</p>
                <p>Số điện thoại : ${message.data.customerData.phone}</p>
                <p>Email : ${message.data.customerData.email}</p>
                <h2>Vui lòng liên hệ với khách hàng trước ngày ${message.data.contractData.contract.arriveDate} để trao đổi thêm thông tin và hoàn tất thủ tục giao nhà</h2>
                <h2>Vui lòng đăng nhập vào tài khoản để xem chi tiết hơn về thông tin hợp đồng</h2>
                `,
        }
        sgMail
            .send(msg1)
            .then(() => { }, error => {
                console.error(error);
                if (error.response) {
                    console.error(error.response.body)
                }
            });
        delete message.data;
    }
    return res.status(200).json(message);
}

let fullPaymentContract = async (req, res) => {
    let contractId = req.query.contractId
    if (!contractId) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await adminService.fullPaymentContract(contractId);
    if (message.errCode === 0) {
        // Gửi mail cho khách về thông tin chủ nhà
        const msg = {
            to: message.data.customerData.email,
            from: process.env.SENDGRID_EMAIL,
            subject: "Thanh toán thành công",
            html: `
              <h1>Quá trình thanh toán của bạn đã được hoàn tất </h1>
              <h2>Thông tin hợp đồng</h2>
              <p>Căn nhà : ${message.data.contractData.house.data.name}</p>
              <p>Địa chỉ: ${message.data.contractData.house.data.House_Info.address}</p>
              <p>Thời gian: Từ ${message.data.contractData.contract.arriveDate} đến ${message.data.contractData.contract.leftDate} </p>
              <p>Giá: ${message.data.contractData.contract.price} VND</p>
              <p>Trạng thái: ${message.data.contractData.contract.status}</p>
              <h2>Bạn có thể liên hệ với chủ nhà với thông tin sau để biết thêm thông tin chi tiết căn nhà và nhận nhà</h2>
              <p>Họ tên chủ nhà : ${message.data.ownerData.lastName} ${message.data.ownerData.firstName}</p>
              <p>Số điện thoại : ${message.data.ownerData.phone}</p>
              <p>Email : ${message.data.ownerData.email}</p>
              <h2>Bạn vui lòng liên hệ với chủ nhà trước ngày ${message.data.contractData.contract.arriveDate} để trao đổi thông tin và nhận nhà</h2>
              <h2>Chúc bạn có một trải nghiệm tuyệt vời</h2>
              `,
        }
        sgMail
            .send(msg)
            .then(() => { }, error => {
                console.error(error);
                if (error.response) {
                    console.error(error.response.body)
                }
            });
        // Gửi mail cho chủ nhà về thông tin của khách
        const msg1 = {
            to: message.data.ownerData.email,
            from: process.env.SENDGRID_EMAIL,
            subject: "Thông tin đặt nhà",
            html: `
                <h1>Một căn nhà của bạn đã được đặt và hoàn tất thanh toán</h1>
                <h2>Thông tin hợp đồng</h2>
                <p>Căn nhà : ${message.data.contractData.house.data.name}</p>
                <p>Địa chỉ: ${message.data.contractData.house.data.House_Info.address}</p>
                <p>Thời gian: Từ ${message.data.contractData.contract.arriveDate} đến ${message.data.contractData.contract.leftDate} </p>
                <p>Giá: ${message.data.contractData.contract.price} VND</p>
                <p>Trạng thái: ${message.data.contractData.contract.status}</p>
                <h2>Thông tin khách đặt</h2>
                <p>Họ tên khách : ${message.data.customerData.lastName} ${message.data.customerData.firstName}</p>
                <p>Số điện thoại : ${message.data.customerData.phone}</p>
                <p>Email : ${message.data.customerData.email}</p>
                <h2>Vui lòng liên hệ với khách hàng trước ngày ${message.data.contractData.contract.arriveDate} để trao đổi thêm thông tin và hoàn tất thủ tục giao nhà</h2>
                <h2>Để xem chi tiết thêm thông tin về hợp đồng, vui lòng đăng nhập vào tài khoản</h2>
                `,
        }
        sgMail
            .send(msg1)
            .then(() => { }, error => {
                console.error(error);
                if (error.response) {
                    console.error(error.response.body)
                }
            });
        delete message.data;
    }
    return res.status(200).json(message);
}

let cancelContract = async (req, res) => {
    let contractId = req.body.contractId;
    let cancelReason = req.body.cancelReason
    let userId = req.user.id;
    let userRole = req.user.role;
    if (!contractId || !cancelReason) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await adminService.cancelContract(contractId, cancelReason);
    if (message.errCode === 0) {
        if (userRole === 'Admin' || (userRole === 'Owner' && userId == message.data.ownerData.id) || (userRole === 'Customer' && userId == message.data.customerData.id)) {
            // Gửi mail cho khách về việc huỷ Hợp đồng
            const msg = {
                to: message.data.customerData.email,
                from: process.env.SENDGRID_EMAIL,
                subject: "Thông tin huỷ hợp đồng",
                html: `
                  <h1>Một hợp đồng của bạn đã được huỷ</h1>
                  <h2>Thông tin hợp đồng</h2>
                  <p>Căn nhà : ${message.data.contractData.house.data.name}</p>
                  <p>Địa chỉ: ${message.data.contractData.house.data.House_Info.address}</p>
                  <p>Thời gian: Từ ${message.data.contractData.contract.arriveDate} đến ${message.data.contractData.contract.leftDate} </p>
                  <p>Giá: ${message.data.contractData.contract.price} VND</p>
                  <p>Trạng thái: ${message.data.contractData.contract.status}</p>
                  <h2>Thông tin chủ nhà</h2>
                  <p>Họ tên chủ nhà : ${message.data.ownerData.lastName} ${message.data.ownerData.firstName}</p>
                  <p>Số điện thoại : ${message.data.ownerData.phone}</p>
                  <p>Email : ${message.data.ownerData.email}</p>
                  <h2>Lý do huỷ : ${cancelReason}</h2>
                  `,
            }
            sgMail
                .send(msg)
                .then(() => { }, error => {
                    console.error(error);
                    if (error.response) {
                        console.error(error.response.body)
                    }
                });
            // Gửi mail cho chủ nhà về thông tin của khách
            const msg1 = {
                to: message.data.ownerData.email,
                from: process.env.SENDGRID_EMAIL,
                subject: "Thông tin huỷ hợp đồng",
                html: `
                    <h1>Một hợp đồng của bạn đã được huỷ</h1>
                    <h2>Thông tin hợp đồng</h2>
                    <p>Căn nhà : ${message.data.contractData.house.data.name}</p>
                    <p>Địa chỉ: ${message.data.contractData.house.data.House_Info.address}</p>
                    <p>Thời gian: Từ ${message.data.contractData.contract.arriveDate} đến ${message.data.contractData.contract.leftDate} </p>
                    <p>Giá: ${message.data.contractData.contract.price} VND</p>
                    <p>Trạng thái: ${message.data.contractData.contract.status}</p>
                    <h2>Thông tin khách đặt</h2>
                    <p>Họ tên khách : ${message.data.customerData.lastName} ${message.data.customerData.firstName}</p>
                    <p>Số điện thoại : ${message.data.customerData.phone}</p>
                    <p>Email : ${message.data.customerData.email}</p>
                    <h2>Lý do huỷ : ${cancelReason}</h2>
                    `,
            }
            sgMail
                .send(msg1)
                .then(() => { }, error => {
                    console.error(error);
                    if (error.response) {
                        console.error(error.response.body)
                    }
                });
            delete message.data;
            return res.status(200).json(message);
        } else {
            return res.status(401).json({
                message: "Access Denied - Unauthorized",
            });
        }
    } else {
        return res.status(200).json(message);
    }
}

let refundContract = async (req, res) => {
    let contractId = req.body.contractId;
    let cancelReason = req.body.cancelReason;
    let userId = req.user.id;
    let userRole = req.user.role;
    if (!contractId || !cancelReason) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }
    let message = await adminService.refundContract(contractId, cancelReason);
    if (message.errCode === 0) {
        if ((userRole === 'Admin') || (userRole === 'Owner' && userId == message.data.ownerData.id) || (userRole === 'Customer' && userId == message.data.customerData.id)) {
            // Gửi mail cho khách về việc huỷ Hợp đồng
            const msg = {
                to: message.data.customerData.email,
                from: process.env.SENDGRID_EMAIL,
                subject: "Thông tin huỷ hợp đồng",
                html: `
                  <h1>Một hợp đồng của bạn đã được huỷ</h1>
                  <h2>Thông tin hợp đồng</h2>
                  <p>Căn nhà : ${message.data.contractData.house.data.name}</p>
                  <p>Địa chỉ: ${message.data.contractData.house.data.House_Info.address}</p>
                  <p>Thời gian: Từ ${message.data.contractData.contract.arriveDate} đến ${message.data.contractData.contract.leftDate} </p>
                  <p>Giá: ${message.data.contractData.contract.price} VND</p>
                  <p>Trạng thái: ${message.data.contractData.contract.status}</p>
                  <h2>Thông tin chủ nhà</h2>
                  <p>Họ tên chủ nhà : ${message.data.ownerData.lastName} ${message.data.ownerData.firstName}</p>
                  <p>Số điện thoại : ${message.data.ownerData.phone}</p>
                  <p>Email : ${message.data.ownerData.email}</p>
                  <h2>Lý do huỷ : ${cancelReason}</h2>
                  <h2>Bạn sẽ nhận được tiền hoàn trả trong vòng 24h.</h2>
                  <h2>Cảm ơn bạn vì đã sử dụng dịch vụ của chúng tôi</h2>
                  `,
            }
            sgMail
                .send(msg)
                .then(() => { }, error => {
                    console.error(error);
                    if (error.response) {
                        console.error(error.response.body)
                    }
                });
            // Gửi mail cho chủ nhà về thông tin của khách
            const msg1 = {
                to: message.data.ownerData.email,
                from: process.env.SENDGRID_EMAIL,
                subject: "Thông tin huỷ hợp đồng",
                html: `
                    <h1>Một hợp đồng của bạn đã được huỷ</h1>
                    <h2>Thông tin hợp đồng</h2>
                    <p>Căn nhà : ${message.data.contractData.house.data.name}</p>
                    <p>Địa chỉ: ${message.data.contractData.house.data.House_Info.address}</p>
                    <p>Thời gian: Từ ${message.data.contractData.contract.arriveDate} đến ${message.data.contractData.contract.leftDate} </p>
                    <p>Giá: ${message.data.contractData.contract.price} VND</p>
                    <p>Trạng thái: ${message.data.contractData.contract.status}</p>
                    <h2>Thông tin khách đặt</h2>
                    <p>Họ tên khách : ${message.data.customerData.lastName} ${message.data.customerData.firstName}</p>
                    <p>Số điện thoại : ${message.data.customerData.phone}</p>
                    <p>Email : ${message.data.customerData.email}</p>
                    <h2>Lý do huỷ : ${cancelReason}</h2>
                    `,
            }
            sgMail
                .send(msg1)
                .then(() => { }, error => {
                    console.error(error);
                    if (error.response) {
                        console.error(error.response.body)
                    }
                });
            delete message.data;

            return res.status(200).json(message);
        } else {
            return res.status(401).json({
                message: "Access Denied - Unauthorized",
            });
        }
    } else {
        return res.status(400).json(message);
    }

}

module.exports = {
    confirmCreateHouse: confirmCreateHouse,
    getAllHouseWaitCreate: getAllHouseWaitCreate,
    getAllHouseWaitUpdate: getAllHouseWaitUpdate,
    confirmUpdateHouse: confirmUpdateHouse,
    rejectCreateHouse: rejectCreateHouse,
    rejectUpdateHouse: rejectUpdateHouse,
    getAllOwnerHouse: getAllOwnerHouse,
    getAllCustomer: getAllCustomer,
    getAllUser: getAllUser,
    partialPaymentContract: partialPaymentContract,
    fullPaymentContract: fullPaymentContract,
    cancelContract: cancelContract,
    refundContract: refundContract
}