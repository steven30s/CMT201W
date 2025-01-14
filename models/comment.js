// models/Comment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Article = require('./Article');  // 引入文章模型

const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('已发布', '已删除'),
    defaultValue: '已发布',
  },
}, {
  // 如果你想在表中添加创建时间和更新时间
  timestamps: true,
});

// 建立关联：一个评论属于一个文章
Comment.belongsTo(Article, { foreignKey: 'articleId' });

module.exports = Comment;
