const express = require('express');
const router = express.Router();
const db = require('../models')
const isLoggedIn = require('../middleware/isLoggedIn');

//Get "/"
router.get('/index', isLoggedIn, (req, res) => {
  let userId = req.session.passport.user;

  db.user.findOne({
    where: {
      id: userId
    }, include: [db.meeting]
  })
    .then(user => {
      db.meeting.findAll({
        where: {
          userId: userId
        }, include: [db.category]
      })
        .then(foundMeetings => {
          res.render('meetings/index', { user: user, meetings: foundMeetings })
        })
    })
})

//Post "/meeting/new"
router.post('/new', isLoggedIn, (req, res) => {

  console.log("++++++++I am posting")
  db.user.findOne({
    where: { id: req.session.passport.user },
  }).then(user => {


    user.createMeeting({


      url: req.body.url,
      dateTime: req.body.dateTime,
      private: req.body.private,
      recurring: req.body.recurring,
      passcode: req.body.passcode,
      notes: req.body.notes,
      provider: req.body.provider
    }).then(createdMeeting => {
      console.log("2222222222222222222222",req.body.category)


      db.category.findOrCreate({
        where: { name: req.body.category }
      }).then((category) => {

        console.log("33333333333333333333333",category)
        createdMeeting.addCategory(category[0].id)
      }).then(res.redirect('/'))
    })
  }).catch((error) => {
    console.log(error)
    res.render(error)
  })
})

//Get "/meeting/:id"
router.get('/:id', isLoggedIn, (req, res) => {
  db.meeting.findOne({
    where: {
      id: req.params.id
    }, include: [db.category]
  }).then(meeting => {
    res.render('meetings/show', { meeting })
  })
})

// //Put "/meeting/:id/edit"
router.put('/:id/edit', isLoggedIn, (req, res) => {
  db.meeting.findOne({
    where:
      { id: req.params.id },
    include: [db.meeting]
  }).then(meeting => {
    meeting.update({
      url: req.body.url,
      dateTime: req.body.dateTime,
      private: req.body.private,
      recurring: req.body.recurring,
      passcode: req.body.passcode,
      notes: req.body.notes,
      provider: req.body.provider
    }).then(() => {
      db.meetingsCategories.destroy({
        where: { meetingId: req.params.id }
      }).then(() => {
        db.meeting.findOne({ where: { id: req.params.id } }).then(meeting => {
          db.category.findOne({
            where: { name: req.body.category }
          }).then((category) => {
            meeting.addCategory(category[0].id).then(res.redirect('/'))
          }).catch(error => console.log(error))
        })
      })
    })
  })
})

// //Delete "/meeting/:id"
router.delete('/:id/delete', isLoggedIn, (req, res) => {
  db.meetingsCategories.destroy({
    where: { meetingId: req.params.id }
  }).then(() => {
    db.meeting.destroy({ where: { id: req.params.id } })
  }).then(res.redirect('/')).catch((error) => console.log(error))
})

module.exports = router;
