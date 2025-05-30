const { sequelize } = require('./services/persist');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected.');
  } catch (error) {
    console.error('Database connection error:', error);
  }
})();