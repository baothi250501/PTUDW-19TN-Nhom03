const express = require('express');
const route = express.Router();
const productController = require('../controllers/manager/ProductController');
const packageController = require('../controllers/manager/PackageController');

route.get('/products', productController.index);
route.get('/products/new-product', productController.add);
route.get('/products/:id', productController.detail);
route.get('/products/:id/edit', productController.edit);

route.get('/packages', packageController.index);
route.get('/packages/new-product', packageController.add);
route.get('/packages/:id', packageController.detail);
route.get('/packages/:id/edit', packageController.edit);

module.exports = route;