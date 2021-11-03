import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AccordionExm from "./components/AccordionExm";
import "bootstrap/dist/css/bootstrap.css";
// import "./css/main2.css";
import "./css/main.scss";
import "./css/index.scss";

ReactDOM.render(
  <React.StrictMode>
    {/*<App/>*/}
    <AccordionExm/>
  </React.StrictMode>,
  document.getElementById('root')
);

