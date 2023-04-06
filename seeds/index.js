const sequelize = require('../config/connection');

const userSeeds = require('./userdata'); 
const parkSeeds = require('./parkdata')

const seed = async() => {
    await sequelize.sync({ force: true}); 

    await userSeeds();
    
    await parkSeeds();
    
    process.exit(0);
}; 

seed()