const express = require("express");

const { Router } = express;

const { service, reservation, user, gallary } = require("../models");
///incase not needed will be deleted after im done with the routs
// const gallary = require("../models/gallary");
const router = new Router();

// Endpoint for testing the router
// router.get("/", (req, res) => {
//   res.send("Testing service router");
// });

/// went to index.js and added app.use("/service", serviceRouter); which will be used from now on in the front store actions.

router.get("/", async (req, res, next) => {
  try {
    const allServices = await service.findAll();

    res.status(200).send({
      message:
        "Your requested service is found and fetched from the service model in the back sheyla is:",
      allServices,
    });
  } catch (e) {
    next(e);
  }
}); //// first server broke . I deletef the whole router built it again realized .exports was missing !!!now checked via browser working perfect

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
router.get("/:name", async (req, res, next) => {
  try {
    const name = req.params.name;

    const specificService = await service.findAll({
      where: { serviceName: name },
    });

    specificService.length === 0
      ? res.status(404).send("No specific service found")
      : res
          .status(200)
          .send({ message: "specific service created", specificService });
  } catch (error) {
    console.log("Error", error);
    next(error);
  }
});

module.exports = router;
