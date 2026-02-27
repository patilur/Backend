const express = require('express');
const app = express();


// GET /products
app.get('/products', (req, res) => {
    res.send("Here is the list of all products.");
});

// POST /products
app.post('/products', (req, res) => {
    res.send("A new product has been added.");
});

// GET /categories
app.get('/categories', (req, res) => {
    res.send("Here is the list of all categories.");
});

// POST /categories
app.post('/categories', (req, res) => {
    res.send("A new category has been created.");
});
app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});
// Start server on port 4000
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});