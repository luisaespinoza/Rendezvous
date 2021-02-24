'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const bulkUsers = await queryInterface.bulkInsert('users', [{
      email: 'user@example1.com',
      name: 'User1',
      password: 'password1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'user@example2.com',
      name: 'User2',
      password: 'password2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'user@example3.com',
      name: 'User3',
      password: 'password3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'user@example4.com',
      name: 'User4',
      password: 'password4',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {returning: true});

    const bulkMeetings = await queryInterface.bulkInsert('meetings', [{
      userId: bulkUsers[0].id,
      url: "https://www.apple.com/",
      dateTime: new Date(),
      private: false,
      recurring: "weekly",
      passcode: null,
      notes: "meetings are totally rad",
      provider: "zoom",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: bulkUsers[0].id,
      url: "https://www.microsoft.com/",
      dateTime: new Date(),
      private: false,
      recurring: "weekly",
      passcode: null,
      notes: "I love postgreSQL so much",
      provider: "zoom",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: bulkUsers[2].id,
      url: "https://www.google.com/",
      dateTime: new Date(),
      private: false,
      recurring: "weekly",
      passcode: null,
      notes: "Node.js Rules, that is all.",
      provider: "webex",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: bulkUsers[3].id,
      url: "https://www.epson.com/",
      dateTime: new Date(),
      private: false,
      recurring: "daily",
      passcode: null,
      notes: "GA FTW",
      provider: "skype",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],  { returning: true });

    const bulkCategories = await queryInterface.bulkInsert('categories', [{
      name: 'social',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'work',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'school',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'family',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'misc.',
      createdAt: new Date(),
      updatedAt: new Date()
    }],  { returning: true });

   
    const bulkMeetingsCategories = await queryInterface.bulkInsert('meetingsCategories', [{
      meetingId: bulkMeetings[0].id,
      categoryId: bulkCategories[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      meetingId: bulkMeetings[1].id,
      categoryId: bulkCategories[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      meetingId: bulkMeetings[1].id,
      categoryId: bulkCategories[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      meetingId: bulkMeetings[2].id,
      categoryId: bulkCategories[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      meetingId: bulkMeetings[3].id,
      categoryId: bulkCategories[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      meetingId: bulkMeetings[3].id,
      categoryId: bulkCategories[4].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }], { returning: true });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('meetings', null, {truncate: true, cascade: true, restartIdentity: true})
    await queryInterface.bulkDelete('categories', null, {truncate: true, cascade: true, restartIdentity: true});
    await queryInterface.bulkDelete('meetingsCategories', null, {truncate: true, cascade: true, restartIdentity: true});
    await queryInterface.bulkDelete('users', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
