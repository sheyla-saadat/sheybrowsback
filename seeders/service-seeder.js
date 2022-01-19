"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "services",
      [
        {
          serviceName: "aboutMe",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1642595201/Carso/WhatsApp_Image_2022-01-19_at_13.19.03_p7ixpp.jpg",
          serviceDescription: "Description for first service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          serviceName: "Phibrows",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1642595201/Carso/WhatsApp_Image_2022-01-19_at_13.18.54_rnmro3.jpg",
          servicePrice: 450,
          serviceDescription: "Description for second service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          serviceName: "Phiremoval",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1642595351/Carso/WhatsApp_Image_2022-01-19_at_13.28.49_vqdliu.jpg",
          servicePrice: 150,
          serviceDescription: "Description for third service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          serviceName: "Philashes",
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1642595201/Carso/WhatsApp_Image_2022-01-19_at_13.18.50_qvadeo.jpg",
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
