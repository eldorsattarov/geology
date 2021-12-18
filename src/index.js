import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "bootstrap/dist/css/bootstrap.css";
import "./css/main.scss";
import "./css/index.scss";
import "./Etp/etp.scss";
import "./css/news.scss";
import "./css/tadbirkor.scss";
import {Provider} from "react-redux";
import {createStore,compose,applyMiddleware} from "redux";
import TadbirkorLayout from "./components/TadbirkorLayout";
import {rootReducer} from "./redux/redusers/rootReducer";
import thunk from "redux-thunk";
const store = createStore(rootReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={(<div>
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>)}>
            <App/>
        </Suspense>
        {/*<App/>*/}
    </Provider>,
  document.getElementById('root')
);

