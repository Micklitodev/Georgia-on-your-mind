const { User } = require('../models')

const userdata = [
    {
        user_name: 'test1212',
        email: 'sample@gmail.com',
        password: 'password'
    },
];

const userSeeds = () => User.bulkCreate(userdata)

module.exports = userSeeds; 