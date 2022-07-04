const express = require('express');
const route = express.Router();
const personController = require('../controllers/related-people/PersonController');

route.get('/index', personController.index)
route.get('/information', personController.index);
route.get('/managed-history', personController.managedHistory)
route.get('/consumption-history', personController.consumptionHistory)
route.get('/payment-history', personController.paymentHistory)
route.get('/package-list', personController.packageList)
route.get('/cart', personController.cart)
route.get('/buy-success', personController.buySuccess)
/*
route.get('/account', personController.account)

*/

module.exports = route;