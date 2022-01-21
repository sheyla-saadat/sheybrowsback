"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class gallary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      gallary.belongsTo(models.service, { foreignKey: "serviceId" });
    }
  }
  gallary.init(
    {
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "gallary",
    }
  );
  return gallary;
};
