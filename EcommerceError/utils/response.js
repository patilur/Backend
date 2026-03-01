const sendErrorResponse = (res, err) => {
    let statusCode = err.statusCode;
    let meassage = err.meassage;

    return res.status(statusCode).json({
        message: meassage,
        status: false
    })
}

const sendResponse = (res, data, statusCode) => {


    return res.status(statusCode).json({
        data: data,
        status: true
    })
}

module.exports = { sendErrorResponse, sendResponse }