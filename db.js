const { Sequelize } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 5432,
    database: 'zuri002',
  });


  const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

module.exports = {sequelize, testDbConnection};
