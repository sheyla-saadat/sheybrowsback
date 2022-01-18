"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      reservation.belongsTo(models.user);
      reservation.belongsTo(models.service);
    }
  }
  reservation.init(
    {
      dateTime: DataTypes.DATE,
      isConfirmed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "reservation",
    }
  );
  return reservation;
};
