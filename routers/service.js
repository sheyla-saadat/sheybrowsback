const express = require("express");

const { Router } = express;

const { service, reservation, user } = require("../models");
///incase not needed will be deleted after im done with the routs

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

module.exports = router;
