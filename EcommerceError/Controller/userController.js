const { sendErrorResponse, sendResponse } = require('../utils/response');

const getUser = (req, res) => {
    try {
        return sendResponse(res, { message: "Fetching all users" }, 200);
    } catch (err) {
        return sendErrorResponse(res, err);
    }
};

const getUserWithId = (req, res) => {
    try {
        const id = Number(req.params.id);

        // Validate ID
        if (isNaN(id)) {
            return sendErrorResponse(res, {
                message: "Invalid user ID",
                statusCode: 400
            });
        }

        // Mock condition
        if (id > 4) {
            return sendErrorResponse(res, {
                message: "User not found",
                statusCode: 404
            });
        }

        return sendResponse(res, { userId: id }, 200);

    } catch (err) {
        return sendErrorResponse(res, err);
    }
};

const addUser = (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return sendErrorResponse(res, {
                message: "User name is required",
                statusCode: 400
            });
        }

        return sendResponse(res, { name }, 201);

    } catch (err) {
        return sendErrorResponse(res, err);
    }
};

module.exports = {
    getUser,
    getUserWithId,
    addUser
};