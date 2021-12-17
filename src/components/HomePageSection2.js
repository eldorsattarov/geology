import React from 'react';
import {Link} from "react-router-dom";

const HomePageSection2 = () => {
    return (
        <div className="section2">
            <div className="container">
                <div className="row">
                    <div className="col-6 pl-0">
                        <p>Минерал ресурслар базаси</p>
                        <Link to="/mineralResources">
                            <button type="button" className="btn">Батафсил малумот</button>
                        </Link>
                    </div>
                    <div className="col-6">
                        <img src="./images/pngwing 1 (2).png"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageSection2;
