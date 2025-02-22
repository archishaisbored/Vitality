const express = require('express');
const doctorController = require('../controllers/doctorController');

const router = express.Router();

// GET /api/doctors
router.get('/', doctorController.getDoctors);

module.exports = router;