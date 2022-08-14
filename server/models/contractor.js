"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contractor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contractor.hasMany(models.Taskentry, {
        foreignKey: "contractor_id",
        as: "taskentries",
      });
    }
  }
  Contractor.init(
    {
      fullname: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthyear: DataTypes.STRING,
      country_residence: DataTypes.STRING,
      active: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Contractor",
    }
  );
  return Contractor;
};
