import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "bootstrap/dist/css/bootstrap.css";
import "./css/main.scss";
import "./css/index.scss";
import "./Etp/etp.scss";
import "./css/news.scss";
import "./css/tadbirkor.scss";
import {Provider} from "react-redux";

import TadbirkorLayout from "./components/TadbirkorLayout";

ReactDOM.render(
  <React.StrictMode>
    <App/>
    {/*<TadbirkorLayout/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

