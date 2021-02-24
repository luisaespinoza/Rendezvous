const db = require("./models");


// db.user.create({
//     email: "jack@jack.jack",
//     name: "jack",
//     password: "jackjack",
// }).then(createdUser=>{
//     console.log(createdUser)
// // })

db.user.findOne({
  where:
    { id: 1 },
}).then(foundUser => {
foundUser.createMeeting({

    url: "https://www.google.com/",
    dateTime: new Date(),
    private: false,
    recurring: "weekly",
    passcode: null,
    notes: "BYOBacon",
    provider: "zoom"
  }).then(createdMeeting => {
    db.category.findOrCreate({
        where: { name: 'work' }
      }).then((category) => { createdMeeting.addCategory(category[0].id)
  })
})
})

// db.meeting.findOne({where:{id:1}}).then(foundMeeting=>{
//   foundMeeting.createCategory({
//     name: "business"
//   }).then(createdCategory=>{
//     console.log(createdCategory)
//   })
//   })

// db.meeting.findOne({where:{id:1}}).then(foundMeeting=>{
//   foundMeeting.createCategory({
//     name: "pleasure"
//   }).then(createdCategory=>{
//     console.log(createdCategory)
//   })
//   })

// db.category.create({name:"games"}).then(created=>{
//   console.log(created)
// })

//check pgadmin for ids

// db.category.findOne({where: {id: 5}}).then(foundCategory => {
//   db.meeting.findOne({ where: { id: 1 } }).then(foundMeeting => {
//     foundMeeting.addCategory(foundCategory).then(relationInfo => {
//       console.log(relationInfo)
//     })
//   })
// })

// db.category.findOne({where: {id: 5}}).then(foundCategory => {
//   db.meeting.findOne({ where: { id: 1 } }).then(foundMeeting => {
//     foundMeeting.removeCategory(foundCategory).then(relationInfo => {
//       console.log(relationInfo)
//     })
//   })
// })