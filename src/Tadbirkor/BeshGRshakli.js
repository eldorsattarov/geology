import React from 'react';
import TadbirkorLayout from "../components/TadbirkorLayout";

const BeshGRshakli = (props) => {
    return (
        <TadbirkorLayout history={props.history}>
            <div className="beshGr">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Фойдали қазилмалар захиралари ҳаракати <br/>тўғрисида ҳисоботларни қабул қилиш (5-ГР
                                шакли)</h1>
                        </div>
                        <div className="col-12 ">
                            <div className="bgr">
                                <span className="span1">Корхонанинг 2019-йилдаги 5-ГP шакл юкланди</span>
                                <span>20.01.2019</span>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div className="bgr">
                                <span className="span1">Корхонанинг 2020-йилдаги 5-ГP шакл юкланди</span>
                                <span>25.01.2020</span>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div className="bgr">
                                <span className="span1">Корхонанинг 2021-йилдаги 5-ГP шакл юкланди</span>
                                <span>30.01.2021</span>
                            </div>
                        </div>

                        <div className="col-12">
                            <a href="#" className="createGr">
                                <span>
                                    <img src="../images/5gricon.png"/>
                                    5-ГР шаклини юклаш
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </TadbirkorLayout>
    );
};

export default BeshGRshakli;
