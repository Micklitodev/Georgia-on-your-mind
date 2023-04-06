const { Park } = require('../models')

const parkdata = [
    {
        name: 'BLAHBLAHPARK',
        address: '123 go to hell',
        city: 'conyers',
        state: 'ga',
        zip: 30041,
        content: `Nestled in 3200 acres of natural beauty, Stone Mountain Park
         features outdoor recreational activities, seasonal family-friendly attractions, 
         and a variety of on-site lodging options so you can stay where you play! Only minutes 
         from downtown Atlanta, come explore our breathtaking natural areas, experience our 
         family-friendly park attractions and enjoy our seasonal festivals and special events.

        `
    },

];

const parkSeeds = () => Park.bulkCreate(parkdata)

module.exports = parkSeeds; 