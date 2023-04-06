const router = require("express").Router();
const { Park } = require("../models");
const path = require('path')

/// ------------------------- render landing page ------------------------- 

router.get("/", async (req, res) => {
  try {
     res.sendFile(path.join(__dirname, "../views/landing.html"))
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get("/home", async (req, res) => {
  try {
     res.sendFile(path.join(__dirname, "../views/index.html"))
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/// ------------------- render login page ----------------------------

router.get("/login", async (req, res) => {
  try {
     res.sendFile(path.join(__dirname, "../views/login.html"))
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/// ------------------- render signup page ----------------------------

router.get("/signup", async (req, res) => {
  try {
     res.sendFile(path.join(__dirname, "../views/signup.html"))
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/// ----------------- Render All Parks -------------------------------


router.get('/home', async (req, res) => {
  try{
    const allPark = await Park.findAll()
    const parks = allPark.map((place) => place.get({plain: true}))
    
    res.status(200).render('homepage', { parks })
  }catch(err) {
    console.log(err) 
    res.status(500).json(err)
  }
})




module.exports = router;
 