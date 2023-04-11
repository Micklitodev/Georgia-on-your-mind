const router = require("express").Router();
const { Review } = require("../../models");

// ------------ create a comment -------------

router.post("/newreview", async (req, res) => {
  let date = new Date();
  let today_date = date.toLocaleString();

  try {
    const newRev = await Review.create({
        date: today_date,
        park_id : req.body.park_id,
        user_name: req.session.currentuser,
        rating: req.body.rating,
        content: req.body.content,
        
    });
    res.status(200).json(newRev);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;