const express = require('express');
const router = express.Router();
const db = require("../models")
const isLoggedIn = require('../middleware/isLoggedIn');


//Get "/"
router.get("/", isLoggedIn, (req, res) => {
//     let userId = req.session.passport.user;

//     //db call for user's meetings
//     db.user.findOne({
//             where:{
//                 id: userId
//         }, include: [db.meeting]
//     }
//     ).then(user=>{
//         //console.log(user)
//     res.render("user/index",{user:user})
//     })
  res.render("user/index")
})


//Post "/meeting/new"
router.post("/meeting/new", (req,res) => {
  // db.meeting.create({
  //   user: req.body.user,
  //   url: req.body.url,
  //   dateTime: req.body.dateTime,
  //   // private is a boolean value
  //   private: req.body.private,
  //   // daily, weekly, or monthly
  //   recurring: req.body.recurring,
  //   passcode: req.body.passcode,
  //   notes: req.body.notes,
  //   provider: req.body.provider,
  // })
  // .then((meeting) => {
  //   db.category.findOne({
  //     where: {
  //       name: req.body.category,
  //     }
  //   }).then((category) => {
  //     db.meetingsCategories.create({
  //       categoryId: category.id,
  //       meetingId: meeting.id,
  //     }).then((created) => {
  //       res.redirect("/")
  //     })
  //   })
  // })
  // .catch((error) => {
  //   console.log(error)
  //   res.render(error)
  // })
})

//Get "/meeting/:id"
// router.get()
// //Put "/meeting/:id/edit"
// router.put()
// //Delete "/meeting/:id"
// router.delete()







module.exports = router;
