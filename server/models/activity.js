"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Activity.hasMany(models.Taskentry, {
        foreignKey: "activity_id",
        as: "taskentries",
      });

      Activity.belongsToMany(models.Project, {
        through: "Projectactivities",
        as: "projects",
        foreignKey: "activity_id",
      });

      Activity.belongsToMany(models.Category, {
        through: "activitycategories",
        as: "categories",
        foreignKey: "activity_id",
      });
    }
  }
  Activity.init(
    {
      description: DataTypes.STRING,
      active: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Activity",
    }
  );
  return Activity;
};
