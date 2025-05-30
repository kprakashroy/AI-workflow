const queue = require('./services/jobQueue');

queue.on('completed', (job, result) => {
  console.log(`Job ${job.id} completed`, result);
});

module.exports = queue;