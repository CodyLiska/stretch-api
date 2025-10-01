const express = require("express");
const router = express.Router();
const Stretch = require("../models/Stretch");

// GET /api/stretches with optional filters
router.get("/", async (req, res) => {
  const filters = {};

  if (req.query.difficulty) filters.difficulty = req.query.difficulty;
  if (req.query.muscle) filters.muscleGroups = req.query.muscle;
  if (req.query.tag) filters.tags = req.query.tag;

  try {
    const stretches = await Stretch.find(filters).limit(100); // limit to 100 for performance
    res.json(stretches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/stretches/:id
// Fetch a single stretch by ID
router.get("/:id", async (req, res) => {
  const stretch = await Stretch.findById(req.params.id);
  if (!stretch) {
    return res.status(404).send("Stretch not found");
  }
  res.json(stretch);
});

module.exports = router;
