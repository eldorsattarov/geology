import React ,{useState ,useEffect}from 'react';
import MapContainer from "./MapContainer";
import {BrowserRouter} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import {API_PATH} from "../tools/constants";
import {useTranslation} from "react-i18next";
const HomePageSection5 = () => {
    const {t} = useTranslation();
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
                                        <h3>{t("manzil.text")}</h3>
                                    </div>
                                    <div>
                                        <h4>{t("manzil.manzil")}</h4>
                                        <p>{item.address}</p>
                                    </div>
                                    <div>
                                        <h4>{t("manzil.telefon")}</h4>
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
