'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('users', [{
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
