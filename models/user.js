const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    goals: [
        {
          type: Schema.Types.ObjectId,
          ref: "Goal"
        }
      ],
      join: [
        {
          type: Schema.Types.ObjectId,
          ref: "Goal"
        }
      ]
});

const User = mongoose.model("User", userSchema);

module.exports = User; //specidic for user