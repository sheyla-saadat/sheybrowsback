const User = require("./models").user;
const Service = require("./models").service;
const Reservation = require("./models").reservation;

const oneUserWithReservation = async (id) => {
  try {
    const user = await User.findByPk(id, {
      include: [{ model: Reservation, include: [Service] }],
    });
    console.log(user.toJSON());
  } catch (e) {
    console.log("hellooooo");
    console.log(e.message);
  }
};

oneUserWithReservation(1);
