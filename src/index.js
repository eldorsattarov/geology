import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AccordionExm from "./components/AccordionExm";
import "bootstrap/dist/css/bootstrap.css";
import "./css/main.scss";
import "./css/index.scss";
import "./Etp/etp.scss";
import Carousel from "./components/Carousel";

ReactDOM.render(
  <React.StrictMode>
    <App/>
    {/*<AccordionExm/>*/}
    {/*<Carousel/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

