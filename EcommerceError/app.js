const express = require('express');
const app = express();
const userRoute = require('./routes/userRoutes')
const cartRoute = require('./routes/cartRoutes')
const productRoute = require('./routes/productRoutes')

// Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

app.use(express.static('public'));
//parse incoming request with json payload
app.use(express.json());

app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/cart', cartRoute);

// 404 Handler (ALWAYS LAST)
app.use((req, res) => {
    res.status(404).send("Page not found");
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});