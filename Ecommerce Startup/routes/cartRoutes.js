const express = require('express');
const router = express.Router();
const cartController = require('../Controller/cartController')
/*
GET /cart/:userId returns: "Fetching cart for user with ID: userId".
POST /cart/:userId returns: "Adding product to cart for user with ID: userId".
*/
router.get('/:userId', cartController.fetchCart)

router.post('/:userId', cartController.addProduct)

module.exports = router;