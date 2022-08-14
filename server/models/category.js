"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Category.hasMany(models.Taskentry, {
        foreignKey: "category_id",
        as: "taskentries",
      });

      Category.belongsToMany(models.Activity, {
        through: "Activitycategories",
        as: "activities",
        foreignKey: "category_id",
      });
    }
  }
  Category.init(
    {
      description: DataTypes.STRING,
      active: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
