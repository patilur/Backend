const express = require('express');
const router = express.Router();

/*
GET /cart/:userId returns: "Fetching cart for user with ID: userId".
POST /cart/:userId returns: "Adding product to cart for user with ID: userId".
*/
router.get('/:userId', (req, res) => {
    const id = req.params.userId;
    res.send(`Fetching cart for user with ID: ${id}`);
})

router.post('/:userId', (req, res) => {
    const id = req.params.userId;
    res.send(`Adding product to cart for user with ID: ${id}`);
})

module.exports=router;