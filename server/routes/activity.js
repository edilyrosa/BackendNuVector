const express = require("express");
const router = express.Router();
const { Activity, Contractor } = require("../models");

//?ENDPOINT: http://localhost:5000/activity

//?This getAll Activities.
router.get("/", async (req, res) => {
  const listOfActivities = await Activity.findAll();
  res.json(listOfActivities);
});

//?This get one Activity.
router.get("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  const activity = await Activity.findByPk(id); //!NO SE SI AL CONSULIR ESTE ENDPOINT NECESITARE ESTOS : QUE ESTOY BORRANDO DE LA URL
  if (activity === null) {
    res.send("Activity was does not exist, ERROR 400");
  }
  res.json(activity);
});

//?This metho CREATE a Activity.
router.post("/", async (req, res) => {
  const activity = req.body; //Request of
  const created = await Activity.create(activity);
  res.json(created); //Response
});

//?This metho UPDATE a Activity.
router.put("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  //!COMO CONTROLAR QUE ID ENVIADO NO EXISTE, NO SE SI PUEDA OCURRIR ??
  const updateActivity = req.body;

  await Activity.update(
    {
      //Table's fields to UPDATE.

      description: updateActivity.description,
      active: updateActivity.active,
    },
    {
      where: {
        id, //Indicator to do UPDATE
      },
    }
  );
  res.json(updateActivity);
});

//?This metho DELETE a Activity
router.delete("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  const deleteActivity = req.body;
  await Activity.destroy({
    where: {
      id,
    },
  });
  res.send(`Activity was DETELED`);
});

module.exports = router; //To access this Router in index.js of folder "models" of the tabls.
