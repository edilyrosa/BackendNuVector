const express = require("express");
const router = express.Router();
const { Client } = require("../models");

//?ENDPOINT: http://localhost:3002/client

//?This getAll Clients
router.get("/", async (req, res) => {
  const listOfClients = await Client.findAll();
  res.json(listOfClients);
});

//?This get one Client
router.get("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  const client = await Client.findByPk(id); //!NO SE SI AL CONSULIR ESTE ENDPOINT NECESITARE ESTOS : QUE ESTOY BORRANDO DE LA URL
  if (client === null) {
    res.send("Client was does not exist, ERROR 400");
  }
  res.json(client);
});

//?This metho CREATE a Client.
router.post("/", async (req, res) => {
  const client = req.body; //Request of
  await Client.create(client);
  res.json(client); //Response
});

//?This metho UPDATE a Client.
router.put("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  //!COMO CONTROLAR QUE ID ENVIADO NO EXISTE, NO SE SI PUEDA OCURRIR ??
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
});

//?This metho DELETE a Client.
router.delete("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  const deleteClient = req.body;
  await Client.destroy({
    where: {
      id,
    },
  });
  res.send(`Client was DETELED`);
});

module.exports = router; //To access this Router in index.js of folder "models" of the tabls.
