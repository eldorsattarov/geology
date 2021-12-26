import React , {useState , useEffect}from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../tools/constants";

const HomePageSection2 = () => {
    const [mineral , setMineral] = useState([]);

    useEffect(()=>{
        axios.get(API_PATH + "Mineral-resurslar/")
            .then((res)=>{
                // console.log(res)
                setMineral(res.data.results);
            })
    },[]);

    return (
        <div className="section2">
            <div className="container">
                {
                    mineral.map((item,index)=>{
                        return(
                            <div className="row" key={item.id}>
                                <div className="col-6 pl-0">
                                    <p>{item.title}</p>
                                    <Link to="/mineralResources">
                                        <button type="button" className="btn">{item.button_txt}</button>
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <img src={item.img}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default HomePageSection2;
