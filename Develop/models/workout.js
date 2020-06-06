const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// example

const workoutSchema = new Schema({
  type: {
    type: String,
    required: "String is Required"
  },

  name: {
    type: String,
    unique: true,
    required: true
  },

  duration: {
    type: Number,
    unique: true,
    required: true
  },
  weight: {
    type: Number,
    unique: true,
    required: true
  },
  reps: {
    type: Number,
    unique: true,
    required: true
  },

  sets: {
    type: Number,
    unique: true,
    required: true
  },

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;