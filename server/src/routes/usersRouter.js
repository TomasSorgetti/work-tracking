const { Router } = require("express");

const userRouter = Router();

userRouter.use("/", (req, res) => {
  res.send("hola");
});

module.exports = userRouter;
