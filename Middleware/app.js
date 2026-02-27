const express = require('express');
const app = express();

// Middleware
function addUser(req, res, next) {
    req.user = "Guest";
    next();
}

// Apply only to /welcome
app.get("/welcome", addUser, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//     console.log("Middleware executed");
//     req.user = "Guest";
//     next();
// });

// app.get("/welcome", (req, res) => {
//     console.log("Route handler executed");
//     res.send(`<h1>Welcome, ${req.user}!</h1>`);
// });

// app.listen(3000);