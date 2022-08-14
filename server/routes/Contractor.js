const express = require("express");
const router = express.Router();
const { Contractor } = require("../models");

//?ENDPOINT: http://localhost:5000/contractor

//?This getAll Contractors
router.get("/", async (req, res) => {
  const listOfContractors = await Contractor.findAll();
  res.json(listOfContractors);
});

//?This get one Contractor
router.get("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  const contractor = await Contractor.findByPk(id); //!NO SE SI AL CONSULIR ESTE ENDPOINT NECESITARE ESTOS : QUE ESTOY BORRANDO DE LA URL
  if (contractor === null) {
    res.send("Contractor was does not exist, ERROR 400");
  }
  res.json(contractor);
});

//?This metho CREATE a Contractor.
router.post("/", async (req, res) => {
  const contractor = req.body; //Request of
  await Contractor.create(contractor);
  res.json(contractor); //Response
});

//?This metho UPDATE a Contractor.
router.put("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  //!COMO CONTROLAR QUE ID ENVIADO NO EXISTE, NO SE SI PUEDA OCURRIR ??
  const updateContractor = req.body;

  await Contractor.update(
    {
      //Table's fields to UPDATE.
      fullname: updateContractor.fullname,
      gender: updateContractor.gender,
      birthyear: updateContractor.birthyear,
      country_residence: updateContractor.country_residence,
      active: updateContractor.active,
    },
    {
      where: {
        id, //Indicator to do UPDATE
      },
    }
  );
  res.json(updateContractor);
});

//?This metho DELETE a Contractor.
router.delete("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  const deleteContractor = req.body;
  await Contractor.destroy({
    where: {
      id,
    },
  });
  res.send(`Contractor was DETELED`);
});

module.exports = router; //To access this Router in index.js of folder "models" of the tabls.
