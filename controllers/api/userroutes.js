const router = require("express").Router(); //require router
const { User } = require("../../models");

// destroy session or logout

router.delete("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// create new user

router.post("/signup", (req, res) => {
  try {
    const createUser = User.create({
      user_name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.currentuser = req.body.username;
      req.session.loggedIn = true;
      res.status(200).json(createUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//login route

router.post("/login", async (req, res) => {
  try {
    const getUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!getUser) {
      res
        .status(404)
        .json({ message: "Invalid Credentials , Please try agian. " });
      return;
    }

    const verifyPass = await getUser.verifyPassword(req.body.password);

    if (!verifyPass) {
      res
        .status(404)
        .json({ message: "Invalid Credentials , Please try agian. " });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.currentuser = getUser.userName();
      res.status(200).json({ message: " you are logged in! " });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
