//import models
const User = require("./user");
const Park = require("./park");
const Review = require("./review");

//Reviews belong to Parks
Review.belongsTo(Park,{
    foreignKey: 'park'
});

//Parks have many Reviews
Park.hasMany(Review, {
    foreignKey: 'park',
    onDelete: 'CASCADE',
});

//Reviews belong to Users
Review.belongsTo(User, {
    foreignKey: 'userid',
    onDelete: 'CASCADE',
});

//Users have many reviews
User.hasMany(Review, {
    foreignKey: 'userid',
    onDelete: "CASCADE",
})





module.exports = { User,Park,Review }
