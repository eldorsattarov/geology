import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Gealogiya from "./components/Gealogiya";
import ReportingSpecialists from "./components/interactive_service/ReportingSpecialists";
import ReceiptOfReports from "./components/interactive_service/ReceiptOfReports";
import Cadastre from "./components/interactive_service/Cadastre";

import YouthUnion from "./components/About/YouthUnion";
import Enterprise1 from "./components/About/Enterprise1";
import Stafff from "./components/About/Stafff";

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


                /************         UMIDJON          ***************/
                <Route path="/specialists" exact component={ReportingSpecialists}/>
                <Route path="/reports" exact component={ReceiptOfReports}/>
                <Route path="/cadastre" exact component={Cadastre}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
