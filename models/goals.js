const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newGoal = new Schema({
    title: { type: String, required: true },
    category: { type: Selection, required: true },
    description: { type: String, required: true },
});

const User = mongoose.model("newGoal", newGoalSchema);

module.exports = newGoal;