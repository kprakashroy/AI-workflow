// const { getDocumentContent, ensureGoogleAuth } = require('../integrations/google');
const { callOpenAI } = require('../integrations/openai');

async function workflowJob({ docUrl, prompt, userToken }) {
  // const authClient = await ensureGoogleAuth(userToken);
  // const content = await getDocumentContent(docUrl, authClient);
  // const response = await callOpenAI(prompt.replace('input', content));
  const response = await callOpenAI(prompt);
  return { 
    //content, 
    response };
}

module.exports = workflowJob;