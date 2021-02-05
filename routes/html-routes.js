const router = require("express").Router();
const path = require("path");

const sendPage = (res, page) => {
  res.sendFile(path.join(__dirname, page));
};

router.get("/stats", (req, res) => sendPage(res, "../public/stats.html"));

router.get("/exercise", (req, res) =>
  sendPage(res, "../public/exercise.html")
);

router.get("/", (req, res) => sendPage(res, "../public/index.html"));

module.exports = router;