import React, {useEffect, useState} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {updateState, getNews} from "../../redux/actions/carouselNewsAction";
import {Modal, ModalBody} from "reactstrap";
import {API_PATH} from "../../tools/constants";

const AllNews = (props) => {

    useEffect(() => {
        props.getNews()
    })

    return (
        <div>
            <Header/>
            <div className="allNews">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pl-0"><h2>Барча янгиликлар</h2></div>
                        <div className="row mt-3">
                            {props.news.map((item, index) => {
                                return (
                                    <div className="col-4 mt-4">
                                        <div className="card">
                                            <div className="card-img-top">
                                                <img src={item.img} className="w-100"/>
                                                {/*<img src="./images/Rectangle 23.png" className="w-100"/>*/}
                                            </div>
                                            <div className="card-body">
                                                <p>
                                                    {item.text}
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="d-flex justify-content-end">
                                                    <span>{item.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
{/*                        <div className="row mt-4">*/}
{/*                            <div className="col-4">*/}
{/*                                <div className="card">*/}
{/*                                    <div className="card-img-top">*/}
{/*                                        <img src="./images/Rectangle 23 (2).png" className='w-100'/>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-body">*/}
{/*                                        <p>*/}
{/*                                            "Уранкамёбметгеология" АЖ марказий каротаж отряди геофизика тадқиқот*/}
{/*                                            ишларини*/}
{/*                                            ўтказмоқда.*/}
{/*                                        </p>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-footer">*/}
{/*                                        <div className="d-flex justify-content-end">*/}
{/*                                            <span>24.10.2021</span>*/}
{/*                                        </div>*/}
{/*                                    </div>*/}
{/*                                </div>*/}
{/*                            </div>*/}
{/*                            <div className="col-4">*/}
{/*                                <div className="card">*/}
{/*                                    <div className="card-img-top">*/}
{/*                                        <img src="./images/Rectangle 23 (1).png" className="w-100"/>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-body">*/}
{/*                                        <p>*/}
{/*                                            "Urankamyobmetgeologiya" AJ mutahassislari Djengeldi maydonida ish olib*/}
{/*                                            bormoqdalar.*/}
{/*                                        </p>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-footer">*/}
{/*                                        <div className="d-flex justify-content-end">*/}
{/*            <span>15.08.2021*/}
{/*</span>*/}
{/*                                        </div>*/}
{/*                                    </div>*/}
{/*                                </div>*/}
{/*                            </div>*/}
{/*                            <div className="col-4">*/}
{/*                                <div className="card">*/}
{/*                                    <div className="card-img-top">*/}
{/*                                        <img src="./images/Rectangle 23.png" className="w-100"/>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-body">*/}
{/*                                        <p>*/}
{/*                                            "Геология - маркшейдерлик хизмати" ДК мутахассислари "Турангысай"*/}
{/*                                            участкасида*/}
{/*                                            маркшейдерлик ўлчов ишларини олиб боришмоқда.*/}
{/*                                        </p>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-footer">*/}
{/*                                        <div className="d-flex justify-content-end">*/}
{/*            <span>2.10.2021*/}
{/*</span>*/}
{/*                                        </div>*/}
{/*                                    </div>*/}
{/*                                </div>*/}
{/*                            </div>*/}
{/*                        </div>*/}
{/*                        <div className="row mt-4">*/}
{/*                            <div className="col-4">*/}
{/*                                <div className="card">*/}
{/*                                    <div className="card-img-top">*/}
{/*                                        <img src="./images/Rectangle 23 (2).png" className='w-100'/>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-body">*/}
{/*                                        <p>*/}
{/*                                            "Уранкамёбметгеология" АЖ марказий каротаж отряди геофизика тадқиқот*/}
{/*                                            ишларини*/}
{/*                                            ўтказмоқда.*/}
{/*                                        </p>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-footer">*/}
{/*                                        <div className="d-flex justify-content-end">*/}
{/*                                            <span>24.10.2021</span>*/}
{/*                                        </div>*/}
{/*                                    </div>*/}
{/*                                </div>*/}
{/*                            </div>*/}
{/*                            <div className="col-4">*/}
{/*                                <div className="card">*/}
{/*                                    <div className="card-img-top">*/}
{/*                                        <img src="./images/Rectangle 23 (1).png" className="w-100"/>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-body">*/}
{/*                                        <p>*/}
{/*                                            "Urankamyobmetgeologiya" AJ mutahassislari Djengeldi maydonida ish olib*/}
{/*                                            bormoqdalar.*/}
{/*                                        </p>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-footer">*/}
{/*                                        <div className="d-flex justify-content-end">*/}
{/*            <span>15.08.2021*/}
{/*</span>*/}
{/*                                        </div>*/}
{/*                                    </div>*/}
{/*                                </div>*/}
{/*                            </div>*/}
{/*                            <div className="col-4">*/}
{/*                                <div className="card">*/}
{/*                                    <div className="card-img-top">*/}
{/*                                        <img src="./images/Rectangle 23.png" className="w-100"/>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-body">*/}
{/*                                        <p>*/}
{/*                                            "Геология - маркшейдерлик хизмати" ДК мутахассислари "Турангысай"*/}
{/*                                            участкасида*/}
{/*                                            маркшейдерлик ўлчов ишларини олиб боришмоқда.*/}
{/*                                        </p>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-footer">*/}
{/*                                        <div className="d-flex justify-content-end">*/}
{/*            <span>2.10.2021*/}
{/*</span>*/}
{/*                                        </div>*/}
{/*                                    </div>*/}
{/*                                </div>*/}
{/*                            </div>*/}
{/*                        </div>*/}
{/*                        <div className="row mt-4">*/}
{/*                            <div className="col-4">*/}
{/*                                <div className="card">*/}
{/*                                    <div className="card-img-top">*/}
{/*                                        <img src="./images/Rectangle 23 (2).png" className='w-100'/>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-body">*/}
{/*                                        <p>*/}
{/*                                            "Уранкамёбметгеология" АЖ марказий каротаж отряди геофизика тадқиқот*/}
{/*                                            ишларини*/}
{/*                                            ўтказмоқда.*/}
{/*                                        </p>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-footer">*/}
{/*                                        <div className="d-flex justify-content-end">*/}
{/*                                            <span>24.10.2021</span>*/}
{/*                                        </div>*/}
{/*                                    </div>*/}
{/*                                </div>*/}
{/*                            </div>*/}
{/*                            <div className="col-4">*/}
{/*                                <div className="card">*/}
{/*                                    <div className="card-img-top">*/}
{/*                                        <img src="./images/Rectangle 23 (1).png" className="w-100"/>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-body">*/}
{/*                                        <p>*/}
{/*                                            "Urankamyobmetgeologiya" AJ mutahassislari Djengeldi maydonida ish olib*/}
{/*                                            bormoqdalar.*/}
{/*                                        </p>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-footer">*/}
{/*                                        <div className="d-flex justify-content-end">*/}
{/*            <span>15.08.2021*/}
{/*</span>*/}
{/*                                        </div>*/}
{/*                                    </div>*/}
{/*                                </div>*/}
{/*                            </div>*/}
{/*                            <div className="col-4">*/}
{/*                                <div className="card">*/}
{/*                                    <div className="card-img-top">*/}
{/*                                        <img src="./images/Rectangle 23.png" className="w-100"/>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-body">*/}
{/*                                        <p>*/}
{/*                                            "Геология - маркшейдерлик хизмати" ДК мутахассислари "Турангысай"*/}
{/*                                            участкасида*/}
{/*                                            маркшейдерлик ўлчов ишларини олиб боришмоқда.*/}
{/*                                        </p>*/}
{/*                                    </div>*/}
{/*                                    <div className="card-footer">*/}
{/*                                        <div className="d-flex justify-content-end">*/}
{/*            <span>2.10.2021*/}
{/*</span>*/}
{/*                                        </div>*/}
{/*                                    </div>*/}
{/*                                </div>*/}
{/*                            </div>*/}
{/*                        </div>*/}

                    </div>
                </div>

            </div>

            <Footer/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        open: state.news.open,
        news: state.news.news
    }
}
export default connect(mapStateToProps, {updateState, getNews})(AllNews);
// export default AllNews;
