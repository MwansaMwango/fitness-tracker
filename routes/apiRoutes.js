// ===============================================================================
// DEPENDENCIES
// ===============================================================================
const db = require("../models");
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // Get all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
        console.log("DBWorkout:", dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // Add Exercise: Update particular workout with new excercise
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })

      .catch((err) => {
        res.json(err);
      });
  });

  // New: Create a new workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // Get all workouts stats and limit to last 7 entries/days.
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
