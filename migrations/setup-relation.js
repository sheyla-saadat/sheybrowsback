"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("reservations", "userId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addColumn("reservations", "serviceId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "services",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("reservations", "userId");
    await queryInterface.removeColumn("reservations", "serviceId");
  },
};
