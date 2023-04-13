const router = require("express").Router();
const { Park, Review } = require("../models");
const path = require("path");

/// ------------------------- render landing page -------------------------

router.get("/", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../views/landing.html"));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/// ------------------- render login page ----------------------------

router.get("/login", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/// ------------------- render signup page ----------------------------

router.get("/signup", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../views/signup.html"));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/// ----------------- Render All Parks -------------------------------

router.get("/home", async (req, res) => {
  try {
    const allPark = await Park.findAll();
    const parks = allPark.map((place) => place.get({ plain: true }));

    res
      .status(200)
      .render("homepage", { parks, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/// ------------------- Render Single Park -----------------------------

router.get("/park/:id", async (req, res) => {
  try {
    const specificPark = await Park.findByPk(req.params.id, {
      include: [{ model: Review }],
    });

    const review = specificPark.reviews.map((rev) => rev.get({ plain: true }));

    const name = specificPark.dataValues.name;
    const county = specificPark.dataValues.county;
    const image = specificPark.dataValues.image;
    const content = specificPark.dataValues.content;
    const user = req.session.currentuser;

    res.status(200).render("singlepark", {
      name,
      county,
      image,
      content,
      review,
      user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
