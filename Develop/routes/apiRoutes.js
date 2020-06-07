const router = require("express-router")();
const db = require("../models")

router.get("/api/workouts", (req, res) => {
    db.workout.find({})
      .sort({ date: -1 })
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.post("/api/workouts", ({ body }, res) => {
  db.workout.create(body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.workout.find()
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
