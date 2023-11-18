require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const userModel = require("./models/userModel");
const jobModel = require("./models/jobModel")

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false }
);


userModel(sequelize);
jobModel(sequelize);

const { user, job } = sequelize.models;
user.hasMany(job)
job.belongsTo(user)


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};