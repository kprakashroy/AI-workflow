const Queue = require('bull');
const workflowJob = require('../jobs/workflowJob');

const queue = new Queue('workflow-queue');

queue.process(async (job) => {
  return await workflowJob(job.data);
});

module.exports = queue;