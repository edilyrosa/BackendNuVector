const express = require("express");
const router = express.Router();
const { Category } = require("../models");

//?ENDPOINT: http://localhost:5000/category

//?This getAll Categories
router.get("/", async (req, res) => {
  const listOfCategories = await Category.findAll();
  res.json(listOfCategories);
});

//?This get one Category.
router.get("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  const category = await Category.findByPk(id); //!NO SE SI AL CONSULIR ESTE ENDPOINT NECESITARE ESTOS : QUE ESTOY BORRANDO DE LA URL
  if (category === null) {
    res.send("Category was does not exist, ERROR 400");
  }
  res.json(category);
});

//?This metho CREATE a Category.
router.post("/", async (req, res) => {
  const category = req.body; //Request of
  await Category.create(category);
  res.json(category); //Response
});

//?This metho UPDATE a Category.
router.put("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  //!COMO CONTROLAR QUE ID ENVIADO NO EXISTE, NO SE SI PUEDA OCURRIR ??
  const updateCategory = req.body;

  await Category.update(
    {
      //Table's fields to UPDATE.

      description: updateCategory.description,
      active: updateCategory.active,
    },
    {
      where: {
        id, //Indicator to do UPDATE
      },
    }
  );
  res.json(updateCategory);
});

//?This metho DELETE a Category.
router.delete("/:id", async (req, res) => {
  const id = req.params.id.substring(1);
  const deleteCategory = req.body;
  await Category.destroy({
    where: {
      id,
    },
  });
  res.send(`Categorywas DETELED`);
});

module.exports = router; //To access this Router in index.js of folder "models" of the tabls.
