const express = require('express');
const router = express.Router();
const currencyDataController = require('../controllers/currencyDataController')

router.post('/', currencyDataController.getCurrencyDataContoller);

module.exports = router;