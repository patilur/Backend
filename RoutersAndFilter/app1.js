const express = require('express');

const app = express();

const bookRouter = require('./routes/book');

// Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

app.use('/books', bookRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

/*
GET /books: Print a message and send a response like "Here is the list of books!".
POST /books: Print the book data sent in the request and send a message like "Book has been added!".
*/ 