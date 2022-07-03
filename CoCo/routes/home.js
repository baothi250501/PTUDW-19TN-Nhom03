const express = require('express');
const route = express.Router();

const homeController = require('../controllers/HomeController');

route.get('/', homeController.index);
//route.get('/:slug', homeController.not_found);

module.exports = route
