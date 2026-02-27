const express = require('express');
const app = express();

const studentRouter = require('./routes/Student');
const courseRouter = require('./routes/Course');
const homeRouter = require('./routes/Home');

// Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// Routes
app.use('/', homeRouter);
app.use('/students', studentRouter);
app.use('/courses', courseRouter);

// 404 Handler (ALWAYS LAST)
app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});