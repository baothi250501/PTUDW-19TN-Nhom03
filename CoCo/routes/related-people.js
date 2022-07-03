const express = require('express');
const route = express.Router();
const personController = require('../controllers/related-people/PersonController');


route.get('/information', personController.index);
route.get('/managed-history', personController.managedHistory)


module.exports = route;