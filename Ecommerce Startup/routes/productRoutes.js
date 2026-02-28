const express = require('express');
const router = express.Router();

/*
GET /products returns: "Fetching all products".
POST /products returns: "Adding a new product".
GET /products/:id returns: "Fetching product with ID: id".
*/

router.get('/', (req, res) => {
    //const id=req.params.userId;
    res.send(`Fetching all products`);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Fetching product with ID:${id}`);
})

router.post('/', (req, res) => {
    res.send(`Adding a new product`);
})

module.exports=router;