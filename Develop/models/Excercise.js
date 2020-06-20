const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
  type: String,
  name: String,
  weight: Number,
  sets: Number,
  reps: Number,
  duration: Number,
  distance: Number
});

const Excercise = mongoose.model("Excercise", ExcerciseSchema);

module.exports = Excercise;
