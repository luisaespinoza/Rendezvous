const express = require('express');
const router = express.Router();
const db = require('../models')
const isLoggedIn = require('../middleware/isLoggedIn');


//Get "/"
router.get('/index', isLoggedIn, (req, res) => {
  let userId = req.session.passport.user;

  db.user.findOne({ where: { 
    id: userId 
  }, include: [db.meeting] })
  .then(user => {
    db.meeting.findAll({where:{
      userId: userId
    }, include: [db.category]
  })
  .then(foundMeetings=>{
    res.render('user/index', { user: user, meetings: foundMeetings })
    })
  })
})


//Post "/meeting/new"
router.post('/new', isLoggedIn, (req,res) => {
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
})

//Get "/meeting/:id"
// router.get()
// //Put "/meeting/:id/edit"
// router.put()
// //Delete "/meeting/:id"
// router.delete()







module.exports = router;
