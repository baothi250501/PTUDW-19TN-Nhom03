const express = require('express');
const route = express.Router();

const homeController = require('../controllers/home-controller');

//route.get('/:slug', homeController.not_found);

route.get('/', homeController.index);

module.exports = route
