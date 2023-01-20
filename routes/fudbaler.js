const path = require('path');
const fudbalerController = require('../controllers/fudbaler')

const express = require('express');

const rootDir = require('../util/path');
const trenerData=require('./trener');

const router = express.Router();

router.get('/', fudbalerController.getFudbalers);
router.get('/fudbalers/:fudbalerId');

module.exports = router;
