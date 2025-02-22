// src/routes/mlRoutes.js
const express = require('express');
const router = express.Router();
const mlController = require('../controllers/mlController');

router.post('/predict', mlController.predictDisease);

module.exports = router;
