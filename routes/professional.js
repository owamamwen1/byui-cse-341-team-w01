const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET
// localhost:8080/professional
router.get('/', professionalController.getData);
module.exports = router;