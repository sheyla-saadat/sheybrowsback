"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reservations",
      [
        {
          // date: new Date(),
          time: new Date(),
          isConfirmed: true,
          description: "Done before",
          userId: 1,
          serviceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reservations", null, {});
  },
};
