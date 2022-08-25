const express = require("express");
const router = express.Router();
const { Activity, Contractor } = require("../models");

//?ENDPOINT: http://localhost:5000/activity

//?This getAll Activities.
router.get("/", async (req, res) => {
  try {
    const listOfActivities = await Activity.findAll();
    res.json(listOfActivities);
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This get one Activity.
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const activity = await Activity.findByPk(id);
    res.json(activity);
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho CREATE a Activity.
router.post("/", async (req, res) => {
  try {
    const activity = req.body; //Request of
    const created = await Activity.create(activity);
    res.json(created); //Response
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho UPDATE a Activity.
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
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
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho DELETE a Activity
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteActivity = req.body;
    await Activity.destroy({
      where: {
        id,
      },
    });
    res.send(`Activity was DETELED`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router; //To access this Router in index.js of folder "models" of the tabls.
