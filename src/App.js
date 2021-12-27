import React, {useState} from 'react';
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
import CarouselPageOne from "./components/carouselNews/CarouselPageOne";
import LoginEtp from "./Etp/LoginEtp";
import AllNews from "./components/carouselNews/AllNews";
import KorxonaHaqida from "./Tadbirkor/KorxonaHaqida";
import Accounting from "./components/Accounting/Accounting";
import ArizaYuborish from "./Tadbirkor/ArizaYuborish";
import MeningArizam from "./Tadbirkor/MeningArizam";
import KonXaqida from "./Tadbirkor/KonXaqida";
import InteraktivXarita from "./Tadbirkor/InteraktivXarita";
import VebXarita from "./Tadbirkor/VebXarita";
import MineralResources from "./components/MineralResources/MineralResources";
import Index from "./components/MineralResources/Index";
import Login from "./pages/Login";
import Arizam from "./Tadbirkor/Arizam";
import BeshGRshakli from "./Tadbirkor/BeshGRshakli";
import {connect} from "react-redux";
import {colorState} from "./redux/actions/colorAction";
import "./css/bodyy.scss";
const App = (props) => {
    return (
       <div className={props.changeColor===true ? "chan" : ""}>
           <BrowserRouter>
               <Switch>
                   <Route path="/login" exact component={Login}/>
                   {/*Korxona xaqida*/}
                   <Route path="/" exact component={Gealogiya}/>
                   <Route path="/enterprise1" exact component={Enterprise1}/>
                   <Route path="/enterprise2" exact component={EnterpriseTwo}/>
                   <Route path="/staff" exact component={Stafff}/>
                   <Route path="/youthunion" exact component={YouthUnion}/>
                   <Route path="/laws" exact component={Laws}/>

                   {/*Interaktiv xizmat*/}

                   <Route path="/specialists" exact component={ReportingSpecialists}/>
                   <Route path="/reports" exact component={ReceiptOfReports}/>
                   <Route path="/cadastre" exact component={Cadastre}/>

                   {/*Bugalteriya xisobi*/}
                   <Route path="/accounting" exact component={Accounting}/>
                   {/*contact us*/}
                   <Route path="/communication" exact component={HomePageSection5}/>

                   {/*Mineral resurslar bazasi*/}
                   {/*<Route path="/mineralResources" exact component={MineralResources}/>*/}
                   <Route path="/mineralResources" exact component={Index}/>

                   {/*Carousel slider pages*/}
                   <Route path="/carouselPageOne" exact component={CarouselPageOne}/>
                   <Route path="/allNews" exact component={AllNews}/>

                   {/*E - imzo pages*/}
                   <Route path="/loginEtp" exact component={LoginEtp}/>

                   {/*Tadbirkor login e imzo*/}
                   <Route path="/tadbirkor/korxonaHaqida" exact component={KorxonaHaqida}/>
                   <Route path="/tadbirkor/ariza" exact component={ArizaYuborish}/>
                   <Route path="/tadbirkor/meningarizam" exact component={MeningArizam}/>
                   <Route path="/tadbirkor/arizam" exact component={Arizam}/>
                   <Route path="/tadbirkor/konxaqida" exact component={KonXaqida}/>
                   <Route path="/tadbirkor/interaktivxarita" exact component={InteraktivXarita}/>
                   <Route path="/tadbirkor/vebxarita" exact component={VebXarita}/>
                   <Route path="/tadbirkor/beshGr" exact component={BeshGRshakli}/>

               </Switch>
           </BrowserRouter>
       </div>
    );
};
const mapStateToProps = (state) =>{
    return{
        changeColor: state.changeColor.changeColor
    }
}
export default connect(mapStateToProps,{colorState})(App);
