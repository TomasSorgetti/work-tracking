const { job } = require("../db");

const createJobController = async (
  position,
  company,
  path,
  response,
  firstInterview,
  secondInterview,
  thirdInterview,
  comentary,
  userId
) => {
  try {
    const createdJob = await job.create({
      position,
      company,
      path,
      response,
      firstInterview,
      secondInterview,
      thirdInterview,
      comentary,
    });


    await createdJob.setUser(userId);

    return createdJob;
    
  } catch (error) {
    console.error("Error in create job:", error);
    throw error;
  }
};

const getAllJobsController = async (userId) => {
    try {
        return await job.findAll({ where: { userId } });
    } catch (error) {
        console.error("Error searching job:", error);
        throw error
    }
};
const getJobController = async (id) => {
    try {
      return await job.findOne({ where: { id } });
    } catch (error) {
      console.error("Error searching job:", error);
      throw error;
    }
};

module.exports = {
  createJobController,
  getAllJobsController,
  getJobController,
};
