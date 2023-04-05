const sequelize = require('../config/connection');

const userSeeds = require('./userdata'); 

const seed = async() => {
    await sequelize.sync({ force: true}); 

    await userSeeds();
    
    process.exit(0);
}; 

seed()