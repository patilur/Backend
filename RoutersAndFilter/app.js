const express = require('express');
const app = express();

const orderRouter=require('./routes/order');
const userRouter=require('./routes/users');

app.use('/orders',orderRouter);
app.use('/user',userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});