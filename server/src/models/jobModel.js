const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  const Job = sequelize.define("job", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
    response: {
      type: DataTypes.BOOLEAN,
    },
    firstInterview: {
      type: DataTypes.BOOLEAN,
    },
    secondInterview: {
      type: DataTypes.BOOLEAN,
    },
    thirdInterview: {
      type: DataTypes.BOOLEAN,
    },
    comentary: {
      type: DataTypes.STRING,
    },
  });

  return Job;
};
