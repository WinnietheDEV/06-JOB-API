const express = require("express");
const router = express.Router();

const {
  getJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

router.route("/").get(getJobs).post(createJob);

router.route("/:id").patch(updateJob).delete(deleteJob).get(getJob);

module.exports = router;
