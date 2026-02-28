const express = require('express');
const router = express.Router();
const productControoler = require('../Controller/productController');
/*
GET /products returns: "Fetching all products".
POST /products returns: "Adding a new product".
GET /products/:id returns: "Fetching product with ID: id".
*/

router.get('/', productControoler.getProducts)

router.get('/:id', productControoler.fetchProductwithID)

router.post('/', productControoler.addProduct)

module.exports = router;