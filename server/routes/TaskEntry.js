const { QueryTypes } = require("sequelize");
const express = require("express");
const router = express.Router();
const {
  Taskentry,
  Contractor,
  Client,
  Activity,
  Product,
  Category,
  Project,
} = require("../models");
const activity = require("../models/activity");

//?ENDPOINT: http://localhost:5000/taskentry

//?This getAll Taskentry.
router.get("/", async (req, res) => {
  const listOfTaskentries = await Taskentry.findAll({
    include: [Contractor, Client, Project, Product, Activity, Category],
  });
  res.json(listOfTaskentries);
});

//?This get one Taskentry.
router.get("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  const taskentry = await Taskentry.findByPk(id);
  if (taskentry === null) {
    res.send("Taskentry does not exist, ERROR 400");
  }
  res.json(taskentry);
});

//?This metho CREATE a Taskentry.
router.post("/", async (req, res) => {
  const taskentry = req.body; //Request of
  const { id } = await Taskentry.create(taskentry);

  const created = await Taskentry.findByPk(id, {
    include: [Contractor, Client, Project, Product, Activity, Category],
  });
  res.json(created); //Response
});

//?This metho UPDATE a Taskentry.
router.put("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  //!COMO CONTROLAR QUE ID ENVIADO NO EXISTE, NO SE SI PUEDA OCURRIR ??
  const updateTaskentry = req.body;

  await Taskentry.update(
    {
      //Table's fields to UPDATE.

      contractor_id: updateTaskentry.contractor_id,
      date: updateTaskentry.date,
      duration: updateTaskentry.duration,
      billable: updateTaskentry.billable,
      project_id: updateTaskentry.project_id,
      client_id: updateTaskentry.client_id,
      product_id: updateTaskentry.product_id,
      activity_id: updateTaskentry.activity_id,
      category_id: updateTaskentry.category_id,
      description: updateTaskentry.description,
    },
    {
      where: {
        id, //Indicator to do UPDATE
      },
    }
  );
  res.json(updateTaskentry);
});

//?This metho DELETE a Taskentry.
router.delete("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  const deleteTaskentry = req.body;
  await Taskentry.destroy({
    where: {
      id,
    },
  });
  res.send(`Taskentry was DETELED`);
});

module.exports = router; //To access this Router in index.js of folder "models" of the tabls.
