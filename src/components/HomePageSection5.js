import React ,{useState ,useEffect}from 'react';
import MapContainer from "./MapContainer";
import {BrowserRouter} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import {API_PATH} from "../tools/constants";
const HomePageSection5 = () => {

    const [aloqa , setAloqa] = useState([]);
    useEffect(()=>{
        axios.get(API_PATH + "Offis/")
            .then((res)=>{
                console.log(res)
                setAloqa(res.data.results);
            })
    },[])
    return (
        <div>
            {window.location.href.includes("/communication") ? <Header/> : ""}
        <div className="section5">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        {aloqa.map((item,index)=>{
                            return(
                                <>
                                    <div className="" key={item.id}>
                                        <h3>Бош офисимиз,<br/>Тошкент шаҳар</h3>
                                    </div>
                                    <div>
                                        <h4>Манзил</h4>
                                        <p>{item.address}</p>
                                    </div>
                                    <div>
                                        <h4>Телефон</h4>
                                        <p>{item.phone}</p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className="col-8 position-relative">

                        {/*<div className="mapContainer">*/}
                            <MapContainer/>
                        {/*</div>*/}
                        {/*<img src="./images/RectangleXarita.png"/>*/}
                    </div>
                </div>
            </div>
        </div>
            {window.location.href.includes("/communication") ? <Footer/> : ""}
        </div>
    );
};

export default HomePageSection5;
