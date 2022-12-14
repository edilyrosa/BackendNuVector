const express = require("express");
const router = express.Router();
const { Category } = require("../models");

//?ENDPOINT: http://localhost:5000/category

//?This getAll Categories
router.get("/", async (req, res) => {
  try {
    const listOfCategories = await Category.findAll();
    res.json(listOfCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This get one Category.
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id);
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho CREATE a Category.
router.post("/", async (req, res) => {
  try {
    const category = req.body; //Request of
    const created = await Category.create(category);
    res.json(created); //Response
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho UPDATE a Category.
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
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
  } catch (err) {
    res.status(500).json(err);
  }
});

//?This metho DELETE a Category.
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteCategory = req.body;
    await Category.destroy({
      where: {
        id,
      },
    });
    res.send(`Categorywas DETELED`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router; //To access this Router in index.js of folder "models" of the tabls.
