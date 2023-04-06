const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Park extends Model {}

Park.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    content: {
        type:DataTypes.TEXT,
        allowNull:false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "park",
  }
);

module.exports = Park;