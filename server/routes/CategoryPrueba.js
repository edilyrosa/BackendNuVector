/*
const express = require("express");
const router = express.Router();
const { getAll } = require("./FunctionsCRUD");
const { Category } = require("../models");

//?This getAll Categories

getAll("/", Category, async(req, res));

//?This get one Category.
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const category = await Category.findByPk(id);
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
  const id = req.params.id;

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
  const id = req.params.id;
  const deleteCategory = req.body;
  await Category.destroy({
    where: {
      id,
    },
  });
  res.send(`Categorywas DETELED`);
});

module.exports = router; //To access this Router in index.js of folder "models" of the tabls.

*/
