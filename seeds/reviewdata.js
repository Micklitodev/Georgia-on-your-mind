const { Review } = require('../models');

const reviewData = [
    {
        park_id: 1,
        user_id: 1,
        user_name: 'test1212',
        rating: 5,
        content: 'I love this park!'
        
    }
]

const reviewSeeds = () => Review.bulkCreate(reviewData);

module.exports = reviewSeeds; 

