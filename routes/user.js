const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require("../models")
const methodOverride = require('method-override');

router.use(methodOverride('_method'));
//Get "/"
router.get()
//Post "/meeting/new"
router.post()
//Get "/meeting/:id"
router.get()
//Put "/meeting/:id/edit"
router.put()
//Delete "/meeting/:id"
router.delete()







module.exports = router;