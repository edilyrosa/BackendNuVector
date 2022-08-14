"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Client.hasMany(models.Project, {
        foreignKey: "client_id",
        //as: "projects",
      });

      Client.hasMany(models.Taskentry, {
        foreignKey: "client_id",
        //as: "taskentries",
      });
    }
  }
  Client.init(
    {
      name: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      industry_codes: DataTypes.STRING,
      active: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Client",
    }
  );
  return Client;
};
