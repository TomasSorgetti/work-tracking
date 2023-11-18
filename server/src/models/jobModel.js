const { DataTypes } = require("sequelize");

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
    },
    company: {
      type: DataTypes.STRING,
    },
    path: {
      type: DataTypes.STRING,
    },
    response: {
      type: DataTypes.STRING,
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
