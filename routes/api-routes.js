const router = require("express").Router();
const Workout = require("../models/workouts");

const goodResponse = (dbWorkout, res) => {
  res.json(dbWorkout);
};

const badResponse = (err, res) => {
  res.status(400).json(err);
};

const create = ({ body }, res) => {
  console.log("Body:", body);
  Workout.create({})
    .then((dbWorkout) => goodResponse(dbWorkout, res))
    .catch((err) => badResponse(err, res));
};

const findAll = (req, res) => {
  Workout.find({})
    .limit(7)
    .then((dbWorkout) => goodResponse(dbWorkout, res))
    .catch((err) => badResponse(err, res));
};

const updateWorkout = (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true, runValidators: true }
  )
    .then((dbWorkout) => goodResponse(dbWorkout, res))
    .catch((err) => badResponse(err, res));
};

router.route("/workouts").get(findAll).post(create);

router.route("/workouts/:id").put(updateWorkout);

router.route("/workouts/range").get(findAll)

module.exports = router;
