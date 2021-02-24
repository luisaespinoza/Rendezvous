'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meeting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.meeting.hasOne(models.user)
      models.meeting.belongsToMany(models.category, 
        { through: 'meetingsCategories' });
    }
  };
  meeting.init({
    userId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    dateTime: DataTypes.DATE,
    private: DataTypes.BOOLEAN,
    recurring: DataTypes.STRING,
    passcode: DataTypes.STRING,
    notes: DataTypes.TEXT,
    provider: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'meeting',
  });
  return meeting;
};