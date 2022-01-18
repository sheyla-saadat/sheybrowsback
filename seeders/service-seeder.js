"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "services",
      [
        {
          serviceName: "aboutMe",
          imageUrl: "https://ibb.co/k2b9vsq",
          serviceDescription: "Description for first service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          serviceName: "Phibrows",
          imageUrl: "https://ibb.co/zhq3mQq",
          servicePrice: 450,
          serviceDescription: "Description for second service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          serviceName: "phiremoval",
          imageUrl: "https://ibb.co/j36FCvd",
          servicePrice: 150,
          serviceDescription: "Description for third service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          serviceName: "philashes",
          imageUrl: "https://ibb.co/4R2Mdd7",
          servicePrice: 50,
          serviceDescription: "Description for third service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("services", null, {});
  },
};
