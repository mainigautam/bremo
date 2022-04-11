import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Bremo from './Bremo';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Bremo />
    </React.StrictMode> 
  </Router>,
  document.getElementById('root')
);
