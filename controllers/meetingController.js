const db = require('../models')
const moment = require('moment')

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
    console.log(meetings.category)

    meetings.forEach((meeting) => {
      meeting.dataValues.dateTime = new Date(meeting.dataValues.dateTime)
      meeting.dataValues.dateTime = new moment(meeting.dataValues.dateTime).format('MMMM/D/YYYY h:mm a')
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

async function getMeetingInfo(req, res) {
  try {
    const meeting = await db.meeting.findOne({ where: { id: req.params.id }, 
      include: [db.category]
    })
    res.render('meetings/show', { meeting })
  } catch(err) {
    console.log(err)
  }
}

async function updateMeeting(req, res) {
  try {
    const meeting = await db.meeting.findOne({ where: { id: req.params.id }});

    await meeting.update({
    url: req.body.url,
    dateTime: req.body.dateTime,
    private: req.body.private,
    recurring: req.body.recurring,
    passcode: req.body.passcode,
    notes: req.body.notes,
    provider: req.body.provider
  });

    await db.meetingsCategories.destroy({ where: { meetingId: req.params.id }});
    
    const [category] = await db.category.findOrCreate({ where: { name: req.body.category }});
    
    await meeting.addCategory(category.dataValues.id);

    res.redirect('/');

  } catch(error) {

    console.log(error)
    
  } 
}

async function deleteMeeting (req, res) {
  try {
    await db.meetingsCategories.destroy({ where: { meetingId: req.params.id }})
    await db.meeting.destroy({ where: { id: req.params.id } })
    res.redirect('/')
  } catch(err) {
    console.log(err)
  }
}

module.exports = {
  createMeeting,
  deleteMeeting,
  getMeetings,
  getMeetingInfo,
  updateMeeting,
}