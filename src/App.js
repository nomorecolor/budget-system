import React from 'react';

import './App.scss'
import { Login } from './login'

import Icon from './assets/icon.png'

function App() {
  return (
    <div className='main-container'>
      <img src={Icon} id='logo' alt='website logo' />
      <div id='login'>
        <Login />
      </div>
    </div>
  );
}

export default App;
