const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newGoalSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    users: {
        type: [String],
         ref: "User",
         default: []
    },
});

const Goals = mongoose.model("Goals", newGoalSchema);

module.exports = Goals;