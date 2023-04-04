const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,
    },
    state_park: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    user_name: {
      type: DataTypes.STRING,
    },
    rating: {
        type:DataType.INTEGER,
    },
    content: {
        type:DataType.STRING,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "comment",
  }
);

module.exports = Review;