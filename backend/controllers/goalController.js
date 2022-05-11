// @desc  Get the data
// @route Get /api/goals
// @access Private
const getGoals = async (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// @desc  Set the data
// @route POST /api/goals
// @access Private
const setGoal = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goal" });
};

// @desc  Update the data
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc  Delete the data
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
