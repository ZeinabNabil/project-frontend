import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
// Components
import setAuthToken from './../utilis/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from './../actions/user.action';
import Arabic from './Arabic';
import English from './English';
if (localStorage.token) {
  //set auth token header auth
  setAuthToken(localStorage.token);
  // decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.token);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // check for expired token
}

const App = ({ lang }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{lang === 'ar' ? <Arabic /> : <English />}</BrowserRouter>
    </Provider>
  );
};

export default App;
