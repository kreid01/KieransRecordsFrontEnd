import { React } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Auth0Provider } from '@auth0/auth0-react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Auth0Provider
      domain="dev-v7gopbxg.us.auth0.com"
      clientId="Au67YXhjip0DgKBzLD0AlUlrEF7xVCPD"
      redirectUri="http://localhost:3000"
      responseType="toke id_token"
        scope="read:current_user update:current_user_metadata">
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Auth0Provider>
    </BrowserRouter>
  </>
)