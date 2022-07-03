const express = require('express');
const route = express.Router();
const productController = require('../controllers/manager/ProductController');
const packageController = require('../controllers/manager/PackageController');
const relatedPeopleController = require('../controllers/manager/RelatedPeopleController');
const homeController = require('../controllers/HomeController');

route.get('/products', productController.index);
route.get('/products/new-product', productController.add);
route.post('/products/new-product/submit', productController.addModel);
route.get('/products/:id', productController.detail);
route.get('/products/:id/edit', productController.edit);
route.get('/products/:id/delete', productController.deleteModel);

route.get('/packages', packageController.index);
route.get('/packages/new-product', packageController.add);
route.get('/packages/:id', packageController.detail);
route.get('/packages/:id/edit', packageController.edit);

route.get('/related-people', relatedPeopleController.index);
route.get('/related-people/add', relatedPeopleController.add);

route.get('/', homeController.manager);
//route.get('/:slug', homeController.not_found);

module.exports = route;