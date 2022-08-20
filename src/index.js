import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// import Counters from "./components/counters";

const root = ReactDOM.createRoot(document.getElementById('root'));
const lang = document.getElementById('root').dataset.lang;
root.render(
  <React.StrictMode>
    <App lang={lang} />
  </React.StrictMode>
);
