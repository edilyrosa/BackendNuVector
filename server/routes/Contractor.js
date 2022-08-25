const express = require("express");
const router = express.Router();
const { Contractor } = require("../models");

//?ENDPOINT: http://localhost:5000/contractor

//?This getAll Contractors
router.get("/", async (req, res) => {
  try {
    const listOfContractors = await Contractor.findAll();
    res.json(listOfContractors);
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This get one Contractor
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const contractor = await Contractor.findByPk(id);
    res.json(contractor);
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho CREATE a Contractor.
router.post("/", async (req, res) => {
  try {
    const contractor = req.body; //Request of
    const created = await Contractor.create(contractor);
    res.json(created); //Response
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho UPDATE a Contractor.
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
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
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho DELETE a Contractor.
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteContractor = req.body;
    await Contractor.destroy({
      where: {
        id,
      },
    });
    res.send(`Contractor was DETELED`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router; //To access this Router in index.js of folder "models" of the tabls.
