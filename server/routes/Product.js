const express = require("express");
const router = express.Router();
const { Product } = require("../models");

//?ENDPOINT: http://localhost:5000/product

//?This getAll Product
router.get("/", async (req, res) => {
  const listOfProducts = await Product.findAll();
  res.json(listOfProducts);
});

//?This get one Product
router.get("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  const product = await Product.findByPk(id); //!NO SE SI AL CONSULIR ESTE ENDPOINT NECESITARE ESTOS : QUE ESTOY BORRANDO DE LA URL
  if (product === null) {
    res.send("Product was does not exist, ERROR 400");
  }
  res.json(product);
});

//?This metho CREATE a Product.
router.post("/", async (req, res) => {
  const product = req.body; //Request of
  await Product.create(product);
  res.json(product); //Response
});

//?This metho UPDATE a Product.
router.put("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  //!COMO CONTROLAR QUE ID ENVIADO NO EXISTE, NO SE SI PUEDA OCURRIR ??
  const updateProduct = req.body;

  await Product.update(
    {
      //Table's fields to UPDATE.

      description: updateProduct.description,
      active: updateProduct.active,
    },
    {
      where: {
        id, //Indicator to do UPDATE
      },
    }
  );
  res.json(updateProduct);
});

//?This metho DELETE a Product.
router.delete("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  const deleteProduct = req.body;
  await Product.destroy({
    where: {
      id,
    },
  });
  res.send(`Product was DETELED`);
});

module.exports = router; //To access this Router in index.js of folder "models" of the tabls.
