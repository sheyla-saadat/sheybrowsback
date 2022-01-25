"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class calendar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  calendar.init(
    {
      time: DataTypes.DATE,
      isBooked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "calendar",
    }
  );
  return calendar;
};
