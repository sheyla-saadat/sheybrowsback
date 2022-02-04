"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Sheyla",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          phone: "71234567",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saadat",
          email: "a@a.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          phone: "1234567",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
