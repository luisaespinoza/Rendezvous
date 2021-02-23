'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('meetings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      dateTime: {
        type: Sequelize.DATE
      },
      private: {
        type: Sequelize.BOOLEAN
      },
      recurring: {
        type: Sequelize.STRING
      },
      passcode: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.TEXT
      },
      provider: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('meetings');
  }
};