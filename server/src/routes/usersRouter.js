const { Router } = require("express");
const { verifyAccessToken } = require("../middlewares/auth");
const {
  postUserHandler,
  getUserByIdHandler,
  userLoginHandler,
} = require("../handlers/userHandlers");


const userRouter = Router();


userRouter.post("/", postUserHandler);
userRouter.post("/login", userLoginHandler);
userRouter.get("/", verifyAccessToken, getUserByIdHandler);

module.exports = userRouter;
