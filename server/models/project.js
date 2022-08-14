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
      Project.belongsTo(models.Client);

      Project.hasMany(models.Taskentry, {
        foreignKey: "project_id",
        as: "taskentries",
      });

      Project.belongsToMany(models.Product, {
        through: "Projectproducts",
        as: "product",
        foreignKey: "project_id",
      });

      Project.belongsToMany(models.Activity, {
        through: "Projectactivities",
        as: "activities",
        foreignKey: "project_id",
      });
    }
  }
  Project.init(
    {
      ClientId: DataTypes.INTEGER, //LA ESTOY CREANDO A MANO
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
