import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {Link} from "react-router-dom";

const CarouselPageOne = () => {
    return (
        <div>
            <Header/>

            <div className="carouselPageOne">
                <div className="container">
                    <div className="row">
                        <div className="col-8 pl-0">
                            <h2>Минерал ресурслар институти технологик<br/> тадқиқотларини ўтказмоқда.</h2>
                            <p>
                                Минерал ресурслар институти “Ўзбекистондаги конлар ва маъдан намоёнларида олтин таркибли
                                маъданларни қайта ишлашнинг самарали технологик схемаларини ишлаб чиқиш” лойиҳаси
                                доирасида Лолазор ва Байрам майдонларидан олинган технологик намуналарда
                                лаборатория
                                миқёсида технологик тадқиқотларини ўтказмоқда.
                            </p>
                            <img src="./images/Rectangle 24.png"/>
                            <p>
                                Тадқиқотлар натижасига кўра Лолазор майдони маъданини концентрацион столда бойитилганда
                                олтиннинг бойитмага ажралиши 37,92% ва кумушники 30,63% ни ташкил этди. Байрам майдони
                                намунасини концентрацион столда бойитилганда олтиннинг бойитмага ажралиши 83,8% ва
                                кумушники 53,52% ни ташкил этди. Флотацион усулда очиқ циклда бойитилганда олтин ва
                                кумушнинг бойитмага ажралиши мос равишда 65,7% ва 22,5% ни ташкил этди.

                            </p>
                            <img src="./images/Rectangle 25.png"/>

                        </div>
                        <div className="col-4">
                            <h2>Сўнгги янгиликлар</h2>
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="./images/Rectangle 23 (2).png" className='w-100'/>
                                </div>
                                <div className="card-body">
                                    <p>
                                        "Уранкамёбметгеология" АЖ марказий каротаж отряди геофизика тадқиқот ишларини
                                        ўтказмоқда.
                                    </p>
                                    <div className="d-flex justify-content-end">
                                        <span>24.10.2021</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-4">
                                <div className="card-img-top">
                                    <img src="./images/Rectangle 23 (1).png" className="w-100"/>
                                </div>
                                <div className="card-body">
                                    <p>
                                        "Urankamyobmetgeologiya" AJ mutahassislari Djengeldi maydonida ish olib
                                        bormoqdalar.
                                    </p>
                                    <div className="d-flex justify-content-end">
            <span>15.08.2021
</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-4">
                                <div className="card-img-top">
                                    <img src="./images/Rectangle 23.png" className="w-100"/>
                                </div>
                                <div className="card-body">
                                    <p>
                                        "Геология - маркшейдерлик хизмати" ДК мутахассислари "Турангысай" участкасида
                                        маркшейдерлик ўлчов ишларини олиб боришмоқда.
                                    </p>
                                    <div className="d-flex justify-content-end">
            <span>2.10.2021
</span>
                                    </div>
                                </div>
                            </div>
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
