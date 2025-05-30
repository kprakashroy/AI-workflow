const { callOpenAI } = require('../integrations/openai');

exports.askAI = async (req, res) => {
  try {
    const { prompt, docContent } = req.body;
    const result = await callOpenAI(prompt.replace('input', docContent));
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};