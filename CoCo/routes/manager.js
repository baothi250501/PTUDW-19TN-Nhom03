const express = require('express');
const route = express.Router();
const productController = require('../controllers/manager/ProductController');

route.get('/products', productController.index);

module.exports = route;