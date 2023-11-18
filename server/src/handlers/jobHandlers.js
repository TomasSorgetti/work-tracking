const {
  createJobController,
  getAllJobsController,
  getJobController,
} = require("../controllers/jobControllers");

const createJobHandler = async (req, res) => { 
    const { id } = req.user
    const userId = id
    const {
      position,
      company,
      path,
      response,
      firstInterview,
      secondInterview,
      thirdInterview,
      comentary
    } = req.body;
    try {
    const result = await createJobController(
      position,
      company,
      path,
      response,
      firstInterview,
      secondInterview,
      thirdInterview,
      comentary,
      userId
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getAllJobsHandler = async (req, res) => {
    const { id } = req.user;
    try {
    const response = await getAllJobsController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getJobHandler = async (req, res) => {
    const {id}=req.params
    try {
    const response = await getJobController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createJobHandler,
  getAllJobsHandler,
  getJobHandler,
};
