"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "calendars",
      [
        {
          time: new Date(),
          isBooked: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          isBooked: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("calendars", null, {});
  },
};
