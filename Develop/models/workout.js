const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// example
const ExampleSchema = new Schema({
  quote: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  age: {
    type: Number,
    unique: true,
    required: true
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  isHuman: Boolean,

  items: Array,

  date: {
    type: Date,
    default: Date.now
  },

  longstring: {
    type: String,
    validate: [({ length }) => length >= 6, "Longstring should be longer."]
  }
});

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;