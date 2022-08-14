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
      Taskentry.belongsTo(models.Client);
      Taskentry.belongsTo(models.Project);
      Taskentry.belongsTo(models.Contractor);
      Taskentry.belongsTo(models.Product);
      Taskentry.belongsTo(models.Activity);
      Taskentry.belongsTo(models.Category);
    }
  }
  Taskentry.init(
    {
      ClientId: DataTypes.INTEGER, //LA ESTOY CREANDO A MANO
      ProjectId: DataTypes.INTEGER, //LA ESTOY CREANDO A MANO
      ContractorId: DataTypes.INTEGER, //LA ESTOY CREANDO A MANO
      ProductId: DataTypes.INTEGER, //LA ESTOY CREANDO A MANO
      ActivityId: DataTypes.INTEGER, //LA ESTOY CREANDO A MANO
      CategoryId: DataTypes.INTEGER, //LA ESTOY CREANDO A MANO

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
      modelName: "Taskentry",
    }
  );
  return Taskentry;
};
