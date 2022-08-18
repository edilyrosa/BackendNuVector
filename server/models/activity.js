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

      Activity.belongsTo(models.Project, { foreignKey: "project_id" });

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
      project_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Activity",
    }
  );
  return Activity;
};
