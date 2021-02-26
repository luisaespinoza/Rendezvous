const db = require("../models");
const moment = require('moment')

async function getProfile(req, res) {
  const userMeetings = await db.meeting.findAll({ where: { userId: req.user.dataValues.id } })

  userMeetings.forEach((meeting) => {
    meeting.dataValues.dateTime = new Date(meeting.dataValues.dateTime)
    meeting.dataValues.dateTime = new moment(meeting.dataValues.dateTime).format('MMMM/D/YYYY h:mm a')
  })
  // console.log(userMeetings)
  // const meetings = await db.meetings.findAll({where: {id: }})
  res.render('profile', {userMeetings});
}





module.exports = {
  getProfile
}