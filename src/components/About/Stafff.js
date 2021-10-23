import React, {useState} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

const Stafff = () => {

    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true)
    }
    return (
        <div>
            <Header/>

            {/*        <div className={`modalOpen d-flex justify-content-center align-items-center ${open===false ? "d-none" : ""}`} onClick={()=>setOpen(!open)}>*/}

            {/*            <div className="xodimForm">*/}
            {/*<div className="container">*/}
            {/*    <div className="row">*/}
            {/*        salom*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            <div className="staff">


                <div className="container p-0">
                    <div className="row p-0 ">
                        <div className="col-12 mb-4"><h1>Ходимлар</h1></div>
                        <div className="col-3 " onClick={() => openModal()}>
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="./images/Rectangle 21.png"/>
                                </div>
                                <div className="card-body">
                                    <h4>Варисов Аълохон<br/>
                                        Аббасович </h4>
                                    <p>
                                        Директор ГП «Госгеолинформцентр»<br/>
                                        Госкомгеологии Республики<br/>
                                        Узбекистан
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 ">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="./images/Rectangle 20.png"/>
                                </div>
                                <div className="card-body">
                                    <h4>Талъатхўжаев Дониёр<br/> Шухратович </h4>
                                    <p>
                                        Зам.директора по инвестиц. ГП <br/>
                                        «Госгеолинформцентр»<br/>
                                        Госкомгеологии Республики<br/>
                                        Узбекистан
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 ">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="./images/Rectangle 19.png"/>
                                </div>
                                <div className="card-body">
                                    <h4>Хакбердиев Нурбек <br/>Мусурманович </h4>
                                    <p>
                                        Зам.директора ГП <br/>
                                        «Госгеолинформцентр»<br/>
                                        Госкомгеологии Республики<br/>
                                        Узбекистан
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="./images/Rectangle 18.png"/>
                                </div>
                                <div className="card-body">
                                    <h4>Мухитдинов Хикматулла<br/> Кудратович </h4>
                                    <p>
                                        начальник Отдела инженерно<br/>
                                        -технического и хозяйственного<br/>
                                        обслуживания ГП <br/>«Госгеолинформцентр»<br/> Госкомгеологии

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="./images/Rectangle 17.png"/>
                                </div>
                                <div className="card-body">
                                    <h4>Ахмедов Кобилжон<br/> Абдуказимович </h4>
                                    <p>
                                        Госгеолфонда ГП <br/>
                                        «Госгеолинформцентр»<br/> Госкомгеологии Республики<br/>
                                        Узбекистан

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="./images/Rectangle 16.png"/>
                                </div>
                                <div className="card-body">
                                    <h4>Курбанов Абдувахид<br/>
                                        Фарход огли</h4>
                                    <p>
                                        Начальник отдела<br/> государственного кадастра
                                        ГП <br/>«Госгеолинформцентр»<br/> Госкомгеологии


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="./images/Rectangle 14.png"/>
                                </div>
                                <div className="card-body">
                                    <h4>Жуков Александр<br/>
                                        Владимировичи</h4>
                                    <p>
                                        Начальник отдела геолого<br/>-экономической оценки ГП <br/>
                                        «Госгеолинформцентр»<br/>
                                        Госкомгеологии
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3" onClick={() => openModal()}>
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="./images/Rectangle 122.png"/>
                                </div>
                                <div className="card-body">
                                    <h4>Головко Елена Александровна</h4>
                                    <p>
                                        Начальник отдела<br/>
                                        производственно-технической,<br/>
                                        информации ГП<br/>
                                        «Госгеолинформцентр»<br/> Госкомгеологии<br/>
                                        Республики Узбекистан
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="./images/Rectangle 21.png"/>
                                </div>
                                <div className="card-body">
                                    <h4>Юлдашева Ирина<br/>
                                        Анатольевна</h4>
                                    <p>
                                        Начальник отдела нормативно<br/>
                                        -экономических исследований<br/>
                                        ГП «Госгеолинформцентр» <br/>Госкомгеологии
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="./images/Rectangle 21.png"/>
                                </div>
                                <div className="card-body">
                                    <h4>Айтметов Улугбек<br/>
                                        Рустемович</h4>
                                    <p>
                                        Главный бухгалтера ГП<br/>
                                        "Госгеолинформцентр" <br/>Госкомгеологии Республики <br/>
                                        Узбекистан
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src="./images/Rectangle 21.png"/>
                                </div>
                                <div className="card-body">
                                    <h4>Хадиметов Ахматбой<br/> Исаматович</h4>
                                    <p>
                                        Начальник отдела ИКТ
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={open} toggle={() => setOpen(!open)}>
                    {/*<ModalBody>*/}
                    <div className="xodimForm1">
                        <div className="container">
                            <div className="row">
                                <div className="d-flex">
                                    <img src="./images/Rectangle 21.png" className="ModalImgOne"/>
                                    <img src="./images/fi_x.png" className="ModalImgTwo" onClick={()=>setOpen(!open)}/>
                                    <div className="row ml-3 mt-3">
                                        <div className="col-12"><h4>Варисов Аълохон Аббасович </h4></div>
                                        <div className="col-4">
                                            <span>Мутахассислиги:</span>
                                        </div>
                                        <div className="col-8">
                                            <a>Директор ГП «Госгеолинформцентр» Госкомгеологии<br/> Республики
                                                Узбекистан</a>
                                        </div>
                                        <div className="col-4">
                                            <span>Телефон : </span>
                                        </div>
                                        <div className="col-8">
                                            <a>Cл. 71-256-07-02<br/>
                                                Cот. 93-558-79-73</a>
                                        </div>
                                        <div className="col-4">
                                            <span>Электронная почта: </span>
                                        </div>
                                        <div className="col-8">
                                            <a>varisovaloxon@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*</ModalBody>*/}
                </Modal>
            </div>
            <Footer/>


        </div>
    );
};

export default Stafff;