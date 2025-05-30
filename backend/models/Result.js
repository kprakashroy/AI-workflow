// Example using Sequelize
module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define('Result', {
    prompt: DataTypes.TEXT,
    content: DataTypes.TEXT,
    response: DataTypes.TEXT
  });
  return Result;
};