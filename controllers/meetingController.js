const db = require('../models')

async function getMeetings(req, res) {
  try {
    const userId = req.session.passport.user;

    const foundUser = await db.user.findOne({ where: 
      { id: userId }, 
      include: [db.meeting]
    })

    const meetings = await db.meeting.findAll({ where: 
      { userId }, 
      include: [db.category]
    })
          
    res.render('meetings/index', { user: foundUser, meetings })
  } catch(err) {
    console.log(err);
    res.redirect('/')
  }
}

async function createMeeting(req, res) {
  
  try {
    const user = await db.user.findOne({ where: { id: req.session.passport.user }})

    const newMeeting = await user.createMeeting({
      url: req.body.url,
      dateTime: req.body.dateTime,
      private: req.body.private,
      recurring: req.body.recurring,
      passcode: req.body.passcode,
      notes: req.body.notes,
      provider: req.body.provider
    })
      
    const newCategory = await db.category.findOrCreate({ where: 
      { name: req.body.category }
    })
      
    await newMeeting.addCategory(newCategory[0].id);
    
    res.redirect('/')
  } catch(error) {
    console.log(error)
    res.render(error)
  }
}

function getMeetingInfo(req, res) {
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
  getMeetingInfo,
  updateMeeting,
}