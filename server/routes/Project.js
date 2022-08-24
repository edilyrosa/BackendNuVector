const express = require("express");
const router = express.Router();
const { Project, Client } = require("../models");

//?ENDPOINT: http://localhost:3002/project

//?This getAll Projects

router.get("/", async (req, res) => {
  const listOfProjects = await Project.findAll({
    include: [Client],
  });
  res.json(listOfProjects);
});

//?This get one Project
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const project = await Project.findByPk(id); //!NO SE SI AL CONSULIR ESTE ENDPOINT NECESITARE ESTOS : QUE ESTOY BORRANDO DE LA URL
  if (project === null) {
    res.send("Project does not exist, ERROR 400");
  }
  res.json(project);
});

//?This metho CREATE a Project.
router.post("/", async (req, res) => {
  const project = req.body; //Request of
  const { id } = await Project.create(project);
  const created = await Project.findByPk(id, {
    include: [Client],
  });
  res.json(created); //Response
});

//?This metho UPDATE a Project.
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  //!COMO CONTROLAR QUE ID ENVIADO NO EXISTE, NO SE SI PUEDA OCURRIR ??
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
});

//?This metho DELETE a Project.
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deleteProject = req.body;
  await Project.destroy({
    where: {
      id,
    },
  });
  res.send(`Project was DETELED`);
});

module.exports = router; //To access this Router in index.js of folder "models" of the tabls.
