const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');

const meetingController = require('../controllers/meetingController');

//Get /meetings
router.get('/index', isLoggedIn, meetingController.getMeetings)

//Post /meetings/new
router.post('/new', isLoggedIn, meetingController.createMeeting)

//Get /meetings/:id
router.get('/:id', isLoggedIn, meetingController.getMeetingInfo)

//Put /meetings/:id/edit
router.put('/:id/edit', isLoggedIn, meetingController.updateMeeting)

//Delete /meetings/:id
router.delete('/:id/delete', isLoggedIn, meetingController.deleteMeeting)

module.exports = router;
