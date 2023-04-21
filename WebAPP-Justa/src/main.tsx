import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { IonNav } from '@ionic/react';
import Login from './pages/Login';

function BackToHome() {
  return <IonNav root={() => <Login />}></IonNav>;
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default BackToHome;