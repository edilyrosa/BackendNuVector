"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.belongsTo(models.Client, {
        foreignKey: "client_id",
      });

      Project.hasMany(models.Taskentry, {
        foreignKey: "project_id",
        as: "taskentries",
      });

      Project.hasMany(models.Activity, {
        foreignKey: "project_id",
        as: "activities",
      });

      Project.belongsToMany(models.Product, {
        through: "Projectproducts",
        as: "product",
        foreignKey: "project_id",
      });
    }
  }
  Project.init(
    {
      client_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};
