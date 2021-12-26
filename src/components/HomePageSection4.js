import React, {useEffect , useState} from 'react';
import axios from "axios";
import {API_PATH} from "../tools/constants";

const HomePageSection4 = () => {

    const [xarita , setXarita] = useState([]);
    useEffect(()=>{
        axios.get(API_PATH + "Xaritalar/")
            .then((res)=>{
                console.log(res)
                setXarita(res.data.results);
            })
    },[]);
    return (
        <div className="section4">
            <div className="container">
                <div className="row">
                    {xarita.map((item,index)=>{
                        return(
                            <div className="col-6" key={item.id}>
                                <div className="card">
                                    <div> <img src={item.img}/></div>
                                    <h2>{item.title}</h2>
                                    <p>{item.sub_title}</p>
                                    <div className="text-center d-flex justify-content-center">
                                        <a href={item.button_link} className="btn text-center" target="_blank">
                                            {item.button_txt}
                                            <img className="img" src={item.icon}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {/*<div className="col-6">*/}
                    {/*    <div className="card">*/}
                    {/*        <div><img src="./images/Ellipse 5.png"/></div>*/}
                    {/*        <h2>Интерактив харита</h2>*/}
                    {/*        <p>Ўзбекистон республика <br/>интерактив харита</p>*/}
                    {/*       <div className="d-flex justify-content-center">*/}
                    {/*           <a href="http://map.uzgeolcom.uz/" target="_blank" className="btn">Батафсил малумот*/}
                    {/*               <img src="./images/fi_map-pin2.png"/>*/}
                    {/*           </a>*/}
                    {/*       </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default HomePageSection4;
