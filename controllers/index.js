const router = require("express").Router();

const pageRoutes = require("./pageroutes")

const userRoutes = require("./api/userroutes");

const revRoutes = require("./api/reviewroutes")

router.use('/', pageRoutes)

router.use('/api', userRoutes);

router.use('/api', revRoutes)

module.exports = router; 