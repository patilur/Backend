const { sendErrorResponse, sendResponse } = require('../utils/response');

const getCartForUser = (req, res) => {
    try {
        const userId = Number(req.params.userId);

        // Validate ID
        if (isNaN(userId)) {
            return sendErrorResponse(res, {
                message: "Invalid user ID",
                statusCode: 400
            });
        }

        // Example condition (mock validation)
        if (userId > 10) {
            return sendErrorResponse(res, {
                message: "User not found",
                statusCode: 404
            });
        }

        return sendResponse(res, {
            message: `Fetching cart for user with ID: ${userId}`
        }, 200);

    } catch (err) {
        return sendErrorResponse(res, err);
    }
};


const addProductToCart = (req, res) => {
    try {
        const userId = Number(req.params.userId);
        const { productId } = req.body;

        // Validate user ID
        if (isNaN(userId)) {
            return sendErrorResponse(res, {
                message: "Invalid user ID",
                statusCode: 400
            });
        }

        if (userId > 10) {
            return sendErrorResponse(res, {
                message: "User not found",
                statusCode: 404
            });
        }

        // Validate product ID
        if (!productId) {
            return sendErrorResponse(res, {
                message: "Product ID is required",
                statusCode: 400
            });
        }

        return sendResponse(res, {
            message: `Product ${productId} added to cart for user ${userId}`
        }, 201);

    } catch (err) {
        return sendErrorResponse(res, err);
    }
};

module.exports = {
    getCartForUser,
    addProductToCart
};