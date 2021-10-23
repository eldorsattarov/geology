import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import HeaderUpper from "./components/HeaderUpper";
import Footer from "./components/Footer";
import HomePageSection2 from "./components/HomePageSection2";
import HomePageSecion1 from "./components/HomePageSecion1";
import Home from "./components/Home";
import Gealogiya from "./components/Gealogiya";
import Enterprise1 from "./components/About the enterprise/Enterprise1";
import ReportingSpecialists from "./components/interactive_service/ReportingSpecialists";
import ReceiptOfReports from "./components/interactive_service/ReceiptOfReports";
import Cadastre from "./components/interactive_service/Cadastre";

const App = () => {
    return (
        <BrowserRouter>
            {/*{window.location.href.includes("/admin") || window.location.href.includes("/login") ? '' :*/}
            {/*<Header/>*/}
            {/*}*/}
            <Switch>
                <Route path="/" exact component={Gealogiya}/>
                <Route path="/enterprise1" exact component={Enterprise1}/>


                /************         UMIDJON          ***************/
                <Route path="/specialists" exact component={ReportingSpecialists}/>
                <Route path="/reports" exact component={ReceiptOfReports}/>
                <Route path="/cadastre" exact component={Cadastre}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
