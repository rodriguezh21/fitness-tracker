const router = require("express").Router();
const db = require("../models/workout")

router.get("/api/workouts", (req, res) => {
    db.find({})
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.post("/api/workouts", ({ body }, res) => {
    db.create(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.find()
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.findByIdAndUpdate(params.id, {$push: { exercises: body }}, { new: true})
  .then(dbworkout => {
    res.json(dbworkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;
