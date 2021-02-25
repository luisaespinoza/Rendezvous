const db = require('../models')

function getMeetings(req, res) {
  let userId = req.session.passport.user;

  db.user.findOne({
    where: {
      id: userId
    }, include: [db.meeting]
  }).then(user => {
      db.meeting.findAll({
        where: {
          userId: userId
        }, include: [db.category]
      })
        .then(foundMeetings => {
          res.render('meetings/index', { user: user, meetings: foundMeetings })
        })
    })
}

function createMeeting(req, res) {
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
      db.category.findOrCreate({
        where: { name: req.body.category }
      }).then((category) => {
        createdMeeting.addCategory(category[0].id)
      }).then(res.redirect('/'))
    })
  }).catch((error) => {
    console.log(error)
    res.render(error)
  })
}

function getMettingInfo(req, res) {
    db.meeting.findOne({
    where: {
      id: req.params.id
    }, include: [db.category]
  }).then(meeting => {
    res.render('meetings/show', { meeting })
  })
}

function updateMeeting(req, res) {
   db.meeting.findOne({
    where:
      { id: req.params.id }
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
          db.category.findOrCreate({
            where: { name: req.body.category }
          }).then(([category, created]) => {
              meeting.addCategory(category.dataValues.id).then(res.redirect("/"))
          }).catch(error => console.log(error))
        })
      })
    })
  })
}

function deleteMeeting (req, res) {
   db.meetingsCategories.destroy({
    where: { meetingId: req.params.id }
  }).then(() => {
    db.meeting.destroy({ where: { id: req.params.id } })
  }).then(res.redirect('/')).catch((error) => console.log(error))
}

module.exports = {
  createMeeting,
  deleteMeeting,
  getMeetings,
  getMettingInfo,
  updateMeeting,
}