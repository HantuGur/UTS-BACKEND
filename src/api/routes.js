const express = require('express');
const gachaRoute = require('./components/gacha/gacha.route');
const prizeRoute = require('./components/prize/prize.route');

const router = express.Router();

router.use('/gacha', gachaRoute);
router.use('/prizes', prizeRoute);

module.exports = router;
