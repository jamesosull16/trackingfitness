const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Please Enter an Exercise to continue",
      },
      weight: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
      duration: {
        type: Number,
        trim: true,
        required: "Please Enter How Long You Excercise For!",
      },
      distance: {
        type: Number,
        trim: true,
      },
    },
  ],
  day: {
    type: Date,
    default: Date.now(),
  },
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
