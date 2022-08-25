const express = require("express");
const router = express.Router();
const { Project, Client } = require("../models");

//?ENDPOINT: http://localhost:5000/project

//?This getAll Projects

router.get("/", async (req, res) => {
  try {
    const listOfProjects = await Project.findAll({
      include: [Client],
    });
    res.json(listOfProjects);
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This get one Project
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findByPk(id);
    res.json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho CREATE a Project.
router.post("/", async (req, res) => {
  try {
    const project = req.body; //Request of
    const { id } = await Project.create(project);
    const created = await Project.findByPk(id, {
      include: [Client],
    });
    res.json(created); //Response
  } catch (error) {
    res.status(500).json(err);
  }
});

//?This metho UPDATE a Project.
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let updateProject = req.body;
    await Project.update(
      {
        //Table's fields to UPDATE.
        client_id: updateProject.client_id,
        name: updateProject.name,
        description: updateProject.description,
        active: updateProject.active,
      },
      {
        where: {
          id, //Indicator to do UPDATE
        },
      }
    );

    updateProject = await Project.findByPk(id, {
      include: [Client],
    });

    res.json(updateProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho DELETE a Project.
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProject = req.body;
    await Project.destroy({
      where: {
        id,
      },
    });
    res.send(`Project was DETELED`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router; //To access this Router in index.js of folder "models" of the tabls.
