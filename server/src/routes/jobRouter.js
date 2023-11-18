const { Router } = require("express");

const jobRouter = Router();

jobRouter.use("/", (req, res) => {
  res.send("job");
});

module.exports = jobRouter;
