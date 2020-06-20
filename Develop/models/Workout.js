const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  _id: Schema.Types.ObjectId,
  day: {
    type: Date
  },
  excercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Excercise"
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
