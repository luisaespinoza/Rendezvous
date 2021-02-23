const db = require("./models");


// db.user.create({
//     email: "jack@jack.jack",
//     name: "jack",
//     password: "jackjack",
// }).then(createdUser=>{
//     console.log(createdUser)
// })

db.user.findOne({
  where:
    { id: 1 }, include: [db.meeting]
}).then(foundUser => {
  foundUser.createMeeting({
    url: "https://www.google.com/",
    dateTime: newDate(),
    private: false,
    recurring: "weekly",
    passcode: null,
    notes: "BYOBacon",
    provider: "zoom"
  }).then(createdMeeting => {
    console.log(createdMeeting)
    console.log(foundUser,"+++++++++++++++++++++++++++++++++++")
    console.log(foundUser.meetings)
  })
})