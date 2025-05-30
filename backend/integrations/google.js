const { google } = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'postmessage'
);

function ensureGoogleAuth(token) {
  oAuth2Client.setCredentials({ access_token: token });
  return oAuth2Client;
}

async function getDocumentContent(docUrl, authClient) {
  const docs = google.docs({ version: 'v1', auth: authClient });
  const docId = docUrl.split('/d/')[1].split('/')[0];
  const response = await docs.documents.get({ documentId: docId });
  return response.data.body.content.map(c => c.paragraph?.elements?.map(e => e.textRun?.content || '').join('')).join('');
}

module.exports = { getDocumentContent, ensureGoogleAuth };