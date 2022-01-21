"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "services",
      [
        {
          serviceName: "About Me",
          imageUrl:
            "https://ik.imagekit.io/xevif6lxgzp/sheybrows/IMG_3582_uHHM8hRxshO.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1642693682987",
          serviceDescription: "Description for first service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          serviceName: "Phibrows",
          imageUrl:
            "https://ik.imagekit.io/xevif6lxgzp/sheybrows/IMG_3565_jQ_1PYiCy.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1642693682584",
          servicePrice: 450,
          serviceDescription: "Description for second service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          serviceName: "Phiremoval",
          imageUrl:
            "https://ik.imagekit.io/xevif6lxgzp/sheybrows/533abece-1855-4ddb-ad97-9daeba05f570_fAIlo1gl_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642693941159",
          servicePrice: 150,
          serviceDescription: "Description for third service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          serviceName: "Philashes",
          imageUrl:
            "https://ik.imagekit.io/xevif6lxgzp/sheybrows/IMG_3566_mBpkV2ZDF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642693682143",
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
