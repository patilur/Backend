const path = require('path');
const { sendErrorResponse, sendResponse } = require('../utils/response');

const getAllProducts = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "view", "Product3.html"));
}

const fetchProductwithID = (req, res) => {
    try {
        const id = Number(req.params.id);
        if (id > 10) {
            let err = new Error("User not found");
            err.statusCode = 404;

            throw err;
        }
        //res.status(200).send(`Fetching product with ID: ${id}`);
        return sendResponse(res, { productId: id }, 200);
    }
    catch (err) {
        return sendErrorResponse(res, err);
    }

}

const addProduct = (req, res) => {
    //res.status(201).send("Adding a new product");
    //data sent by client in the body of http rquest
    try {
        const data = req.body;

        if (!data || !data.productName) {
            return sendErrorResponse(res, {
                message: "Product name is required",
                statusCode: 400
            });
        }

        return sendResponse(res, { value: data.productName }, 201);

    } catch (err) {
        return sendErrorResponse(res, err);
    }
    //return sendResponse()
}

module.exports = {
    getAllProducts,
    fetchProductwithID,
    addProduct
}