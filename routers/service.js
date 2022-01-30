const express = require("express");

const { Router } = express;

const auth = require("../auth/middleware");

const { service, reservation, user, gallary, calendar } = require("../models");

const router = new Router();

// Endpoint for testing the router
// router.get("/", (req, res) => {
//   res.send("Testing service router");
// });

router.get("/", async (req, res, next) => {
  try {
    const allServices = await service.findAll();

    res.status(200).send({
      message: "Your requested service is:",
      allServices,
    });
  } catch (e) {
    next(e);
  }
});

router.get("/gallary", async (req, res, next) => {
  try {
    const gallaryData = await gallary.findAll();

    res.status(200).send({
      message: "Your gallary from backend is:",
      gallaryData,
    });
  } catch (e) {
    next(e);
  }
});

router.post("/reservation", auth, async (req, res, next) => {
  const { serviceId, dateTime } = req.body;
  const userId = req.user.id;

  if (!serviceId || !dateTime) {
    return res
      .status(400)
      .send({ message: "Please choose your specific service, date and time" });
  }

  const reservationCreated = await reservation.create({
    serviceId,
    // date: formattedDates,
    time: dateTime,
    userId,
  });

  return res
    .status(200)
    .send({ message: "New reservation created", reservationCreated });
});

router.get("/reservation", async (req, res, next) => {
  try {
    const allReservation = await reservation.findAll({
      include: {
        model: user,
      },
      order: [["time", "ASC"]],
    });

    res.status(200).send({
      message: "Your requested reservation for admin from the bakc is:",
      allReservation,
    });
  } catch (e) {
    next(e);
  }
});

router.patch("/reservation", async (req, res, next) => {
  const { description, isConfirmed, reservationId } = req.body;

  const id = parseInt(reservationId);

  try {
    const newDescription = await reservation.findByPk(id);

    await newDescription.update({ description, isConfirmed });

    return res.status(200).send({ newDescription });
  } catch (e) {
    next(e);
  }
});

router.get("/calendar", async (req, res, next) => {
  try {
    const allCalendar = await calendar.findAll({ order: [["time", "ASC"]] });

    res.status(200).send({
      message: "Calendar in DB is:",
      allCalendar,
    });
  } catch (e) {
    next(e);
  }
});

router.post("/calendar", auth, async (req, res, next) => {
  const { dateTime } = req.body;

  if (!dateTime) {
    return res
      .status(400)
      .send({ message: "Please choose your specific date and time" });
  }

  await calendar.create({
    time: dateTime,
  });

  const allCalendar = await calendar.findAll();

  return res.status(200).send({ message: "Calendar in DB is:", allCalendar });
});
router.patch("/calendar", async (req, res, next) => {
  const { isBooked, id } = req.body;

  try {
    const newBook = await calendar.findByPk(id);

    await newBook.update({ isBooked });

    return res.status(200).send({ newBook });
  } catch (e) {
    next(e);
  }
});

router.get("/:name", async (req, res, next) => {
  try {
    const name = req.params.name;

    const specificService = await service.findAll({
      where: { serviceName: name },
    });

    specificService.length === 0
      ? res.status(404).send("No specific service found")
      : res.status(200).send({ specificService });
  } catch (error) {
    console.log("Error", error);
    next(error);
  }
});

module.exports = router;
