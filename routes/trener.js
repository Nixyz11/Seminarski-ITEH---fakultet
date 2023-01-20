const path = require('path');

const express = require('express');
const fudbalerController = require('../controllers/fudbaler')
const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/fudbalers', fudbalerController.getFudbalers);

// /admin/add-product => POST
router.post('/add-fudbaler', fudbalerController.postAddFudbaler);

router.get('/fudbalers/:fudbalerId', fudbalerController.getFudbaler);



module.exports = router;