const productServices = require('../Services/productService');

const getAllProducts = (req, res) => {
    const product = productServices.getAllProductsService();
    res.status(200).json(product);

}

const fetchProductwithID = (req, res) => {
    const id = req.params.id;
    const product = productServices.fetchProductwithIDService(id);

    if (!product) {
        return res.status(404).send("Product not found");
    }

    res.status(200).json(product);
    //return productServices.fetchProductwithIDService();
}

const addProduct = (req, res) => {
    const newProduct = productServices.addProductService(req.body);
    res.status(201).json(newProduct);
}

module.exports = {
    getAllProducts,
    fetchProductwithID,
    addProduct
}