import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Gealogiya from "./components/Gealogiya";
import Enterprise1 from "./components/About/Enterprise1";
import Stafff from "./components/About/Stafff";
import YouthUnion from "./components/About/YouthUnion";
// import Staff from "./components/Staff";
// import Staff from "./components/About/Staff";

const App = () => {
    return (
        <BrowserRouter>
            {/*{window.location.href.includes("/admin") || window.location.href.includes("/login") ? '' :*/}
            {/*<Header/>*/}
            {/*}*/}
            <Switch>
                <Route path="/" exact component={Gealogiya}/>
                <Route path="/enterprise1" exact component={Enterprise1}/>
                <Route path="/staff" exact component={Stafff}/>
                <Route path="/youthunion" exact component={YouthUnion}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
