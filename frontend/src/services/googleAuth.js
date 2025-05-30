// let gapiLoaded = false;

// export const initGoogleClient = (clientId) => {
//   return new Promise((resolve, reject) => {
//     if (gapiLoaded) return resolve();

//     const script = document.createElement('script');
//     script.src = 'https://apis.google.com/js/api.js';
//     script.onload = () => {
//       window.gapi.load('client:auth2', () => {
//         window.gapi.client
//           .init({
//             clientId: clientId,
//             scope: 'https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive.readonly',
//           })
//           .then(() => {
//             gapiLoaded = true;
//             resolve();
//           })
//           .catch(reject);
//       });
//     };
//     script.onerror = reject;
//     document.body.appendChild(script);
//   });
// };

// export const signInAndGetToken = async () => {
//   const authInstance = window.gapi.auth2.getAuthInstance();
//   const user = await authInstance.signIn();
//   const token = user.getAuthResponse().access_token;
//   return token;
// };



let tokenClient;
let accessToken = null;

export const initGoogleClient = (clientId) => {
  return new Promise((resolve) => {
    if (tokenClient) return resolve();

    tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: 'https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive.readonly',
      callback: (tokenResponse) => {
        if (tokenResponse.error) {
          console.error('Token error:', tokenResponse);
          resolve(null);
        } else {
          accessToken = tokenResponse.access_token;
          resolve(accessToken);
        }
      },
    });

    resolve();
  });
};

export const signInAndGetToken = () => {
  return new Promise((resolve) => {
    if (!tokenClient) {
      console.error('Token client not initialized');
      return resolve(null);
    }

    tokenClient.requestAccessToken();
    // Wait until the callback sets `accessToken`
    const check = setInterval(() => {
      if (accessToken) {
        clearInterval(check);
        resolve(accessToken);
      }
    }, 100);
  });
};

