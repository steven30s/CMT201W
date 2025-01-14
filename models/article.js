const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Article = sequelize.define(
  "Article",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("草稿", "发布", "隐藏"),
      defaultValue: "发布",
    },
  },
  {
    // 如果你想在表中添加创建时间和更新时间
    timestamps: true,
  }
);

module.exports = Article;
