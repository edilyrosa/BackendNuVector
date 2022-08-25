const express = require("express");
const router = express.Router();
const { Product } = require("../models");

//?ENDPOINT: http://localhost:5000/product

//?This getAll Product
router.get("/", async (req, res) => {
  try {
    const listOfProducts = await Product.findAll();
    res.json(listOfProducts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This get one Product
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho CREATE a Product.
router.post("/", async (req, res) => {
  try {
    const product = req.body; //Request of
    const created = await Product.create(product);
    res.json(created); //Response
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho UPDATE a Product.
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
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
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho DELETE a Product.
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProduct = req.body;
    await Product.destroy({
      where: {
        id,
      },
    });
    res.send(`Product was DETELED`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router; //To access this Router in index.js of folder "models" of the tabls.
