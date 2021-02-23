const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require("../models")
const methodOverride = require('method-override');

router.use(methodOverride('_method'));
//Get "/"
router.get("/:user", (req,res)=> {
//     let userId = req.params.id
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

})


//Post "/meeting/new"
router.post("/", (req,res) => {
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
  // })
})
//Get "/meeting/:id"
router.get()
//Put "/meeting/:id/edit"
router.put()
//Delete "/meeting/:id"
router.delete()







module.exports = router;