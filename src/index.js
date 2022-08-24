import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './i18n';

// import Counters from "./components/counters";
const root = ReactDOM.createRoot(document.getElementById('root'));
const lang = document.getElementById('root').dataset.lang;
root.render(
  <>
    <App lang={lang} />
  </>
);
