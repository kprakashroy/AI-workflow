const { getDocumentContent, ensureGoogleAuth } = require('../integrations/google');

exports.handleGoogleDoc = async (req, res) => {
  try {
    const { docUrl, userToken } = req.body;
    const authClient = await ensureGoogleAuth(userToken);
    const content = await getDocumentContent(docUrl, authClient);
    res.json({ content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};