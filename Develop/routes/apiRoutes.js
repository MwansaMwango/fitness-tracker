// ===============================================================================
// DEPENDENCIES
// ===============================================================================

const db = require("../models");
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(res.json(dbWorkout));
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
       db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body }})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })

      .catch(err => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find()
        .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

};
