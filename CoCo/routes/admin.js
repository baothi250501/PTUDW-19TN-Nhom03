const express = require('express');
const route = express.Router();

const adminController = require('../controllers/admin/AdminController');
const addressController = require('../controllers/admin/AddressController');
const managerController = require('../controllers/admin/ManagerController');

route.get('/', adminController.index);
route.get('/admin-account', adminController.info);

route.get('/address', addressController.list);
route.get('/address/:id',addressController.detail);
route.get('/address/add', addressController.add);
route.get('/address/:id/edit', addressController.edit);

route.get('/manager', managerController.list);
route.get('/manager/history', managerController.history);
route.get('/manager/add', managerController.add);
route.get('/manager/:id', managerController.detail);

module.exports = route;