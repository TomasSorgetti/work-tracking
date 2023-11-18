const { Router } = require("express");
const {
  createJobHandler,
  getAllJobsHandler,
  getJobHandler,
} = require("../handlers/jobHandlers")
const { verifyAccessToken } = require("../middlewares/auth");

const jobRouter = Router();

jobRouter.post("/", verifyAccessToken,createJobHandler);
jobRouter.get("/",verifyAccessToken, getAllJobsHandler);
jobRouter.get("/:id", getJobHandler);

module.exports = jobRouter;
