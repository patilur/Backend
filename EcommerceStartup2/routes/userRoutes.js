const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
const { use } = require('./cartRoutes');
/*
GET /users returns: "Fetching all users".
POST /users returns: "Adding a new user".
GET /users/:id returns: "Fetching user with ID: id".
*/

router.get('/', userController.getUser);

router.get('/:id', userController.getUserWithId);

router.post('/', userController.addUSer);

module.exports = router;