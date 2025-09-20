// src/routes/tasks.js
const express = require("express");
const router = express.Router();
const { tasks } = require("../models/task");
const auth = require("../middleware/auth");
router.use(auth);
router.get("/:projectId", (req, res) => {
  const list = tasks
    .filter(t => t.projectId == req.params.projectId)
    .sort((a, b) => b.priority - a.priority);
  res.json(list);
});
module.exports = router;