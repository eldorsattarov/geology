import React from 'react';
import MapContainer from "./MapContainer";
import {BrowserRouter} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const HomePageSection5 = () => {
    return (
        <div>
            {window.location.href.includes("/aloqa") ? <Header/> : ""}
        <div className="section5" id="aloqa">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="">
                            <h3>Бош офисимиз,<br/>Тошкент шаҳар</h3>
                        </div>
                        <div>
                            <h4>Манзил</h4>
                            <p>Миробод тумани Тарас Шевченко кўчаси. 11-А</p>
                        </div>
                        <div>
                            <h4>Телефон</h4>
                            <p>+99871 256-02-07</p>
                        </div>

                    </div>
                    <div className="col-8">

                        {/*<div className="mapContainer">*/}
                            <MapContainer/>
                        {/*</div>*/}
                        {/*<img src="./images/RectangleXarita.png"/>*/}
                    </div>
                </div>
            </div>
        </div>
            {window.location.href.includes("/aloqa") ? <Footer/> : ""}
        </div>
    );
};

export default HomePageSection5;