const router = require("express").Router();
const { Review } = require("../../models");

// ------------ create a comment -------------

router.post("/newReview", async (req, res) => {

  try {
    const newRev = await Review.create({
        park_id : req.body.park_id,
        user_name: req.session.currentuser,
        rating: req.body.rating,
        content: req.body.content,
    });
    res.status(200).json(newComm);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;