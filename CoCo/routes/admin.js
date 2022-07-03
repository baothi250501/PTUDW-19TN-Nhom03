const express = require('express');
const route = express.Router();

const adminController = require('../controllers/admin/AdminController');
const addressController = require('../controllers/admin/AddressController');
const managerController = require('../controllers/admin/ManagerController');

route.get('/', adminController.index);
route.get('/admin-account', adminController.info);
route.post('/admin-account', (req, res) => {
    console.log('Got body:', req.body.name);
});

route.get('/address', addressController.list);
route.get('/address/add', addressController.add);
route.post('/address/add', (req, res) => {
    console.log('Got body:', req.body);
});
route.get('/address/:id',addressController.detail);

route.get('/address/:id/edit', addressController.edit);
route.post('/address/:id/edit', (req, res) => {
    console.log('Got body:', req.body);
});

route.get('/manager', managerController.list);
route.get('/manager/history', managerController.history);
route.get('/manager/add', managerController.add);
route.post('/manager/add', (req, res) => {
    console.log('Got body:', req.body);
});
route.get('/manager/:id', managerController.detail);

module.exports = route;