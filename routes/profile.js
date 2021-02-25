const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');

const profileController = require('../controllers/profileController')

router.get('/', isLoggedIn, profileController.getProfile);

module.exports = router;