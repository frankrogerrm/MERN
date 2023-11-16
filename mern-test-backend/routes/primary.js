const router = require("express").Router();
let Primary = require("../models/primarymodel");

router.route("/").get((req, res) => {
  Primary.find()
    .then((primary) => res.json(primary))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newPrimary = new Primary({
    username,
    description,
    duration,
    date,
  });

  newPrimary
    .save()
    .then(() => res.json("Primary Added!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
