const express = require('express');

const router = express.Router();

const orderRoutes = require('./components/order/orderRoutes');
const menuRoutes = require('./components/menu/menuRoutes');
const customerRoutes = require('./components/customer/customerRoutes');

router.use('/orders', orderRoutes);
router.use('/menus', menuRoutes);
router.use('/customers', customerRoutes);

module.exports = router;
