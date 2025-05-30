const express = require('express');
const router = express.Router();
// const { handleGoogleDoc } = require('../controllers/docController');
// const { askAI } = require('../controllers/aiController');
const runWorkflow = require('../orchestrator/runWorkflow');

// router.post('/doc', handleGoogleDoc);
// router.post('/ai', askAI);
router.post('/run', async (req, res) => {
  const result = await runWorkflow(req.body);
  res.json(result);
});

module.exports = router;