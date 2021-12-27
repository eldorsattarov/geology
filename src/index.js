import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "bootstrap/dist/css/bootstrap.css";
import "./css/main.scss";
import "./css/index.scss";
import "./Etp/etp.scss";
import "./css/news.scss";
import "./css/tadbirkor.scss";
import "./css/bodyy.scss";
import {Provider} from "react-redux";
import "./components/i18n";
import {createStore,compose,applyMiddleware} from "redux";
import TadbirkorLayout from "./components/TadbirkorLayout";
import {rootReducer} from "./redux/redusers/rootReducer";
import thunk from "redux-thunk";
const store = createStore(rootReducer,compose(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={(<div>Loading...</div>)}>
            <App/>
        </Suspense>
    </Provider>,
  document.getElementById('root')
);

