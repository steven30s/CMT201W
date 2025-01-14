// config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("learn2", "root", "302317", {
  host: "localhost",
  dialect: "mysql",
});

// 测试连接
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to MySQL has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectDB();

module.exports = sequelize;
