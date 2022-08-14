"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Product.hasMany(models.Taskentry, {
        foreignKey: "product_id",
        as: "taskentries",
      });

      Product.belongsToMany(models.Project, {
        through: "Projectproducts",
        as: "projects",
        foreignKey: "Product_id",
      });
    }
  }
  Product.init(
    {
      description: DataTypes.STRING,
      active: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
