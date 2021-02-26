const db = require("../models");

async function getProfile(req, res) {
  const userMeetings = await db.meeting.findAll({ where: { userId: req.user.dataValues.id } })
  console.log(userMeetings)
  // const meetings = await db.meetings.findAll({where: {id: }})
  res.render('profile', {userMeetings});
}





module.exports = {
  getProfile
}