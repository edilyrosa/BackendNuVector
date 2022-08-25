"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Taskentry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Taskentry.belongsTo(models.Client, { foreignKey: "client_id" });
      Taskentry.belongsTo(models.Project, { foreignKey: "project_id" });
      Taskentry.belongsTo(models.Contractor, { foreignKey: "contractor_id" });
      Taskentry.belongsTo(models.Product, { foreignKey: "product_id" });
      Taskentry.belongsTo(models.Activity, { foreignKey: "activity_id" });
      Taskentry.belongsTo(models.Category, { foreignKey: "category_id" });
    }
  }
  Taskentry.init(
    {
      contractor_id: DataTypes.INTEGER,
      date: DataTypes.DATEONLY,
      duration: DataTypes.DECIMAL(11, 10), //!arreglarlo!!,
      billable: DataTypes.BOOLEAN,
      project_id: DataTypes.INTEGER,
      client_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      activity_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "taskentry",
    }
  );
  return Taskentry;
};
