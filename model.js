const {sequelize} = require('./db')
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

User.sync().then(() => {
    console.log("User Model synced");
}).catch((error) => {
    console.error('Error syncing database:', error);
});

module.exports = User;