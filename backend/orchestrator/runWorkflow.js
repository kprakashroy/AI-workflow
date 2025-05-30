const workflowJob = require('../jobs/workflowJob');

async function runWorkflow(payload) {
  return await workflowJob(payload);
}

module.exports = runWorkflow;