const db = require("./models");


// db.user.create({
//     email: "jack@jack.jack",
//     name: "jack",
//     password: "jackjack",
// }).then(createdUser=>{
//     console.log(createdUser)
// })

// db.user.findOne({
//   where:
//     { id: 1 },
// }).then(foundUser => {
// foundUser.createMeeting({

//     url: "https://www.google.com/",
//     dateTime: new Date(),
//     private: false,
//     recurring: "weekly",
//     passcode: null,
//     notes: "BYOBacon",
//     provider: "zoom"
//   }).then(createdMeeting => {
//     db.category.findOrCreate({
//         where: { name: 'work' }
//       }).then((category) => { createdMeeting.addCategory(category[0].id)
//   })
// })
// })

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


// db.meeting.findOne({where:{id:1}}).then(foundMeeting=>{
//     db.category.findOne({where:{id:1}}).then(foundCategory=>{
//         db.user.findOne({where:{id:1}}).then(foundUser=>{
//             foundMeeting.addCategory(foundCategory).then(relation=>{
//                 foundUser.addMeeting(foundMeeting).then(rel=>{
//                     console.log("winning")
//                 })
//             })

//         })
//     })
// })

// db.user.findOne({where:{id:1},include: [db.meeting]}).then(foundUser=>{
//     console.log(foundUser,"++++++",foundUser.meetings)
// })


// db.user.findOne({
//     where:
//       { id: 1 },
//   }).then(foundUser => {
//   foundUser.createMeeting({
  
//       url: "https://www.google.com/",
//       dateTime: new Date(),
//       private: true,
//       recurring: "monthly",
//       passcode: "123",
//       notes: "something",
//       provider: "google"
//     }).then(createdMeeting => {
//       db.category.findOrCreate({
//           where: { name: 'work' }
//         }).then((category) => { createdMeeting.addCategory(category[0].id)
//     })
//   })
//   })


//   db.user.findOne({
//     where:
//       { id: 1 },
//   }).then(foundUser => {
//   foundUser.createMeeting({
  
//       url: "https://www.google.com/",
//       dateTime: new Date(),
//       private: true,
//       recurring: "daily",
//       passcode: "90",
//       notes: "somethingelse",
//       provider: "google"
//     }).then(createdMeeting => {
//       db.category.findOrCreate({
//           where: { name: 'business' }
//         }).then((category) => { createdMeeting.addCategory(category[0].id)
//     })
//   })
//   })

// db.user.findOne({
//     where:
//       { id: 1 },
//   }).then(foundUser => {
//   foundUser.createMeeting({
  
//       url: "https://www.microsoft.com/",
//       dateTime: new Date(),
//       private: false,
//       recurring: "bimonthly",
//       passcode: null,
//       notes: "somethingelseTOO",
//       provider: "adobe"
//     }).then(createdMeeting => {
//       db.category.findOrCreate({
//           where: { name: 'games' }
//         }).then((category) => { createdMeeting.addCategory(category[0].id)
//     })
//   })
//   })


// models.passport