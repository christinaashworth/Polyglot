import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Polyglot } from "./components/Polyglot";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Polyglot />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

