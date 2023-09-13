const { Sequelize } = require("sequelize");
require('dotenv').config()

// const sequelize = new Sequelize({
//     dialect: 'postgres',
//     username: 'postgres',
//     password: process.env.DB_PASSWORD,
//     host: 'localhost',
//     port: 5432,
//     database: 'zuri002',
//   });

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  pool: {
    max: 100,
    min: 0,
    acquire: 10000,
    idle: 20000
  },
  logging: false
})


  const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

module.exports = {sequelize, testDbConnection};
