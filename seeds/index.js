const sequelize = require("../config/connection");

const userSeeds = require("./userdata");
const parkSeeds = require("./parkdata");
const reviewSeeds = require("./reviewdata");

const seed = async () => {
  await sequelize.sync({ force: true });

  await userSeeds();

  await parkSeeds();

  await reviewSeeds();

  process.exit(0);
};

seed();
