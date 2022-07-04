const express = require('express');
const route = express.Router();

const homeController = require('../controllers/HomeController');

route.get('/', homeController.index);
route.post('/', homeController.login);
route.get('/:slug', homeController.index);

module.exports = route
