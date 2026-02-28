const fetchCart = (req, res) => {
    const id = req.params.userId;
    res.send(`Fetching cart for user with ID: ${id}`);
}

const addProduct = (req, res) => {
    const id = req.params.userId;
    res.send(`Adding product to cart for user with ID: ${id}`);
}

module.exports = {
    fetchCart, addProduct
}