import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Gealogiya from "./components/Gealogiya";
import ReportingSpecialists from "./components/interactive_service/ReportingSpecialists";
import ReceiptOfReports from "./components/interactive_service/ReceiptOfReports";
import Cadastre from "./components/interactive_service/Cadastre";

import YouthUnion from "./components/About/YouthUnion";
import Enterprise1 from "./components/About/Enterprise1";
import Stafff from "./components/About/Stafff";
import Laws from "./components/About/Laws";
import HomePageSection5 from "./components/HomePageSection5";
import Footer from "./components/Footer";
import Header from "./components/Header";
import EnterpriseTwo from "./components/About/EnterpriseTwo";

const App = () => {
    return (
        <BrowserRouter>
            {/*{window.location.href.includes("/aloqa") ? "" :*/}
            {/*    <Header/>*/}
            {/*}*/}
            <Switch>

                <Route path="/" exact component={Gealogiya}/>
                <Route path="/enterprise1" exact component={Enterprise1}/>
                <Route path="/enterprise2" exact component={EnterpriseTwo}/>
                <Route path="/staff" exact component={Stafff}/>
                <Route path="/youthunion" exact component={YouthUnion}/>
                <Route path="/laws" exact component={Laws}/>

                /************         UMIDJON          ***************/

                <Route path="/specialists" exact component={ReportingSpecialists}/>
                <Route path="/reports" exact component={ReceiptOfReports}/>
                <Route path="/cadastre" exact component={Cadastre}/>


                <Route path="/aloqa" exact component={HomePageSection5}/>
            </Switch>

            {/*{window.location.href.includes("/aloqa") ? "" : <Footer/>*/}
            {/*}*/}
        </BrowserRouter>
    );
};

export default App;
