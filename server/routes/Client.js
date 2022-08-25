const express = require("express");
const router = express.Router();
const { Client } = require("../models");

//?ENDPOINT: http://localhost:5000/client

//?This getAll Clients
router.get("/", async (req, res) => {
  try {
    const listOfClients = await Client.findAll();
    res.json(listOfClients);
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This get one Client
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const client = await Client.findByPk(id);
    res.json(client);
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho CREATE a Client.
router.post("/", async (req, res) => {
  try {
    const client = req.body; //Request of
    const created = await Client.create(client);
    res.json(created); //Response
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho UPDATE a Client.
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateClient = req.body;
    await Client.update(
      {
        //Table's fields to UPDATE.
        name: updateClient.name,
        city: updateClient.city,
        state: updateClient.state,
        country: updateClient.country,
        industry_codes: updateClient.industry_codes,
        active: updateClient.active,
      },
      {
        where: {
          id, //Indicator to do UPDATE
        },
      }
    );
    res.json(updateClient);
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho DELETE a Client.
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteClient = req.body;
    await Client.destroy({
      where: {
        id,
      },
    });
    res.send(`Client was DETELED`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router; //To access this Router in index.js of folder "models" of the tabls.
