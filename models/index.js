//import models
const User = require("./user");
const Park = require("./park");
const Review = require("./review");



//Reviews belong to Users
Review.belongsTo(User, {
    foreignKey: 'user_id',
});


//Users have many reviews
User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: "CASCADE",
})


//Reviews belong to Parks
Review.belongsTo(Park, {
    foreignKey: 'park_id',
    onDelete: 'CASCADE'
});

//Parks have many Reviews
Park.hasMany(Review, {
    foreignKey: 'park_id',
    onDelete: 'CASCADE',
});






module.exports = { User, Park, Review }
