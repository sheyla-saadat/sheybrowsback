"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "gallaries",
      [
        {
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1642848739/Sheyla/WhatsApp_Image_2022-01-22_at_11.51.28_1_au3gxd.jpg",
          serviceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1642848739/Sheyla/WhatsApp_Image_2022-01-22_at_11.51.28_hgucpf.jpg",
          serviceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1642685860/Sheyla/WhatsApp_Image_2022-01-20_at_14.32.06_1_mitqb0.jpg",
          serviceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1642685860/Sheyla/WhatsApp_Image_2022-01-20_at_14.33.39_ihpeup.jpg",
          serviceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1642685860/Sheyla/WhatsApp_Image_2022-01-20_at_14.37.15_pbwzt1.jpg",
          serviceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1642685860/Sheyla/WhatsApp_Image_2022-01-20_at_14.32.06_t0xi9l.jpg",
          serviceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1642685860/Sheyla/WhatsApp_Image_2022-01-20_at_14.36.12_qwts1p.jpg",
          serviceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1642685939/Sheyla/WhatsApp_Image_2022-01-20_at_14.38.37_fhdtk4.jpg",
          serviceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://res.cloudinary.com/dkdzt4lca/image/upload/v1642595201/Sheyla/WhatsApp_Image_2022-01-19_at_13.18.50_qvadeo.jpg",
          serviceId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("gallaries", null, {});
  },
};
