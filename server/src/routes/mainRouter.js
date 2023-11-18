const { Router } = require("express");
const userRouter = require("./usersRouter");
const jobRouter = require("./jobRouter");

const router = Router();

router.use("/user", userRouter);
router.use("/job", jobRouter);


module.exports = router;
