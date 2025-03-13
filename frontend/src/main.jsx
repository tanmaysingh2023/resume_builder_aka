import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-w1tpw2goyo43sj4g.us.auth0.com"
    clientId="RoUkThl5J4Baq7IREvAabOUx2SIUSH2C"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    
);
