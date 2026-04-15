const express = require('express');

const router = express.Router();

const menuController = require('./menuController');

router.post('/', menuController.createMenu);
router.get('/', menuController.getMenus);

module.exports = router;
