import React from 'react';
import TadbirkorLayout from "../components/TadbirkorLayout";
import {Link} from "react-router-dom";

const MeningArizam = (props) => {
    return (
        <TadbirkorLayout history={props.history}>
            <div className="meningArizam">
                <div className="container">
                    <div className="row">
                        <div className="col-12 meningArizamtop">
                            <h3>Аризалар</h3>
                        </div>
                    </div>
                    <div className="row">
                        {/*bu(meingArizambottom) map bo'ladi va pagination*/}
                        <div className="col-12 meningArizambottom">
                            <div className="nextPage">
                                <Link to="/tadbirkor/arizam">
                                    <img src="/images/ima3.png"/>
                                </Link>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h1>1. REGIONALGEOLOGIYA</h1>
                                    <div className="row pl-0">
                                        <div className="col-4">
                                            <p className="mb-0">Вилоят</p>
                                            <span>Навоий</span>
                                        </div>
                                        <div className="col-4">
                                            <p className="mb-0">Туман</p>
                                            <span>Туман</span>
                                        </div>
                                        <div className="col-4">
                                            <p className="mb-0">Хом-ашё тури</p>
                                            <span>Коалин</span>
                                        </div>
                                    </div>
                                    <div className="linebottom"></div>
                                    <div className="d-flex align-items-center">
                                        <p className="mb-0 pb-0 mr-2 mt-1">Жавоб:</p>
                                        <img src="/images/ima5.png"/>
                                    </div>
                                    <div className="arizaFayl">
                                        <span>Ариза файл</span>
                                        <a href="#"> <img src="/images/ima4.png"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 meningArizambottom">
                            <div className="nextPage">
                                <Link to="/tadbirkor/arizam">
                                    <img src="/images/ima3.png"/>
                                </Link>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h1>1. REGIONALGEOLOGIYA</h1>
                                    <div className="row pl-0">
                                        <div className="col-4">
                                            <p className="mb-0">Вилоят</p>
                                            <span>Навоий</span>
                                        </div>
                                        <div className="col-4">
                                            <p className="mb-0">Туман</p>
                                            <span>Туман</span>
                                        </div>
                                        <div className="col-4">
                                            <p className="mb-0">Хом-ашё тури</p>
                                            <span>Коалин</span>
                                        </div>
                                    </div>
                                    <div className="linebottom"></div>
                                    <div className="d-flex align-items-center">
                                        <p className="mb-0 pb-0 mr-2 mt-1">Жавоб:</p>
                                        <img src="/images/ima2.png"/>
                                    </div>
                                    <div className="arizaFayl">
                                        <span>Ариза файл</span>
                                        <a href="#"> <img src="/images/ima4.png"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TadbirkorLayout>
    );
};

export default MeningArizam;
