const path = require('path');

const getAllProducts = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "view", "product.html"));
}

const fetchProductwithID = (req, res) => {
    const id = req.params.id;

    res.status(200).send(`Fetching product with ID: ${id}`);
}

const addProduct = (req, res) => {
    res.status(201).send("Adding a new product");
}

module.exports = {
    getAllProducts,
    fetchProductwithID,
    addProduct
}