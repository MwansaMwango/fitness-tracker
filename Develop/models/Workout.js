const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  
          day: { type: Date, default: Date.now },
          exercises: [{
              type: {type: String, required: true},
              name: {type: String, required: true},
              distance: Number,
              duration: Number, 
              weight: Number,
              reps: Number,
              sets: Number
          }]
      },
     
      {
          toJSON: {
            virtuals: true
          }
      },
     
      {
          versionKey: false
      }
  );

  WorkoutSchema.virtual("totalDuration").get(function () {
      return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
      }, 0);
  });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
