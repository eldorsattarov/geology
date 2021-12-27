import React, {useState, useEffect} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constants";

const CarouselPageOne = () => {
    const [newQisqa, setnewQisqa] = useState([]);
    const [newQisqa2, setnewQisqa2] = useState([]);
    useEffect(() => {
        axios.get(API_PATH + "Yangiliklar/")
            .then((res) => {
                setnewQisqa(res.data.results);
            })
    }, []);
    const newTeskari = newQisqa.reverse();

    return (
        <div>
            <Header/>
            <div className="carouselPageOne">
                <div className="container">
                    <div className="row">
                        <div className="col-8 pl-0">
                            <h2>Минерал ресурслар институти технологик<br/> тадқиқотларини ўтказмоқда.</h2>
                            {newTeskari.map((item,index)=>{
                               while (index<2){
                                   return(
                                       <div className="">
                                           {/*<p>*/}
                                           {/*Минерал ресурслар институти “Ўзбекистондаги конлар ва маъдан намоёнларида олтин таркибли*/}
                                           {/*маъданларни қайта ишлашнинг самарали технологик схемаларини ишлаб чиқиш” лойиҳаси*/}
                                           {/*доирасида Лолазор ва Байрам майдонларидан олинган технологик намуналарда*/}
                                           {/*лаборатория*/}
                                           {/*миқёсида технологик тадқиқотларини ўтказмоқда.*/}
                                           {/*</p>*/}
                                           <img src={item.img}/>
                                           <p>{item.batafsil}</p>
                                           {/*<img src="./images/Rectangle 25.png"/>*/}
                                       </div>
                                   )
                               }
                            })}
                        </div>
                        <div className="col-4">
                            <h2>Сўнгги янгиликлар</h2>
                            {
                                newTeskari.map((item, index) => {
                                    while (index<3){
                                        return (
                                            <div className="card mt-4" key={item.id}>
                                                <div className="card-img-top">
                                                    <img src={item.img} className='w-100'/>
                                                </div>
                                                <div className="card-body">
                                                    <p>
                                                        {item.text}
                                                    </p>
                                                    <div className="d-flex justify-content-end">
                                                        <span>{item.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }


                            {/*<div className="card">*/}
                            {/*    <div className="card-img-top">*/}
                            {/*        <img src="./images/Rectangle 23 (2).png" className='w-100'/>*/}
                            {/*    </div>*/}
                            {/*    <div className="card-body">*/}
                            {/*        <p>*/}
                            {/*            "Уранкамёбметгеология" АЖ марказий каротаж отряди геофизика тадқиқот ишларини*/}
                            {/*            ўтказмоқда.*/}
                            {/*        </p>*/}
                            {/*        <div className="d-flex justify-content-end">*/}
                            {/*            <span>24.10.2021</span>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*                            <div className="card mt-4">*/}
                            {/*                                <div className="card-img-top">*/}
                            {/*                                    <img src="./images/Rectangle 23 (1).png" className="w-100"/>*/}
                            {/*                                </div>*/}
                            {/*                                <div className="card-body">*/}
                            {/*                                    <p>*/}
                            {/*                                        "Urankamyobmetgeologiya" AJ mutahassislari Djengeldi maydonida ish olib*/}
                            {/*                                        bormoqdalar.*/}
                            {/*                                    </p>*/}
                            {/*                                    <div className="d-flex justify-content-end">*/}
                            {/*            <span>15.08.2021*/}
                            {/*</span>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                            </div>*/}
                            {/*                            <div className="card mt-4">*/}
                            {/*                                <div className="card-img-top">*/}
                            {/*                                    <img src="./images/Rectangle 23.png" className="w-100"/>*/}
                            {/*                                </div>*/}
                            {/*                                <div className="card-body">*/}
                            {/*                                    <p>*/}
                            {/*                                        "Геология - маркшейдерлик хизмати" ДК мутахассислари "Турангысай" участкасида*/}
                            {/*                                        маркшейдерлик ўлчов ишларини олиб боришмоқда.*/}
                            {/*                                    </p>*/}
                            {/*                                    <div className="d-flex justify-content-end">*/}
                            {/*            <span>2.10.2021*/}
                            {/*</span>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                            </div>*/}

                            <div className='carouselDivLink'>
                                <a href="/allNews" className="carouselAllLink">Барчаси<img
                                    src="./images/right.png"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default CarouselPageOne;
