import React, { useState, useEffect } from 'react';
import { initGoogleClient, signInAndGetToken } from '../services/googleAuth';

const CLIENT_ID = '872331059725-853525r6t4e42k90e4b8itfrp7fkk2fq.apps.googleusercontent.com'; // Replace this

const GoogleDocumentNode = () => {
  const [docUrl, setDocUrl] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    initGoogleClient(CLIENT_ID)
      .then(() => console.log('Google API initialized'))
      .catch((err) => console.error('Init error', err));
  }, []);

  const handleAuth = async () => {
    try {
      const token = await signInAndGetToken();
      setAccessToken(token);
      setAuthenticated(true);
      alert('Authenticated successfully!');
    } catch (err) {
      console.error('Auth error', err);
      alert('Authentication failed.');
    }
  };

  const handleBlur = () => {
    if (docUrl && !authenticated) {
      handleAuth();
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="icon blue">📄</div>
        <div>
          <p className="title">Google Docs</p>
          <p className="subtitle">Google Docs Reader</p>
        </div>
        <div className="loop-mode">Loop Mode <span className="badge">Off</span></div>
      </div>

      <p className="description">Read the content from a Google Docs file and returns the text contents.</p>

      <label className="label">Doc Link 🔗</label>
      <input
        type="text"
        placeholder="https://docs.google.com/..."
        className="input"
        value={docUrl}
        onChange={(e) => setDocUrl(e.target.value)}
        onBlur={handleBlur}
      />

      {/* <button className="link-button">Show More Options ⏷</button> */}
      <div className="connector-badge bottom">1</div>
    </div>
  );
};

export default GoogleDocumentNode;
