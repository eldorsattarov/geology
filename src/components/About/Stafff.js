import React, {useState,useEffect} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {connect} from "react-redux";
import {getStaf , stafState} from "../../redux/actions/stafAction";

const Stafff = (props) => {

    const [staf , setStaf] = useState([])
    // const [open, setOpen] = useState(false);

    useEffect(()=>{
        props.getStaf();
        // axios.get(API_PATH + "Xodimlar/")
        //     .then((res)=>{
        //         console.log(res);
        //         setStaf(res.data.results);
        //     })
    },[])

    const modalStyle = {
        content:{
           display : "none"
        }
    }
    // const openModal = () => {
    //     setOpen(true)
    // }
    return (
        <div>
            <Header/>

            <div className="staff">
                <div className="container p-0">
                    <div className="row p-0 ">
                        <div className="col-12 mb-4"><h1>Ходимлар</h1></div>
                        {props.staf.map((item,index)=>{
                            return(
                                <div className="col-3 " key={item.id}
                                     onClick={()=>props.stafState({open:!props.open , stafSelected: item})}>
                                    {console.log("selected")}
                                    {console.log(props.stafSelected)}
                                    <div className="card">
                                        <div className="card-img-top">
                                            <img src={item.img}/>
                                        </div>
                                        <div className="card-body">
                                            <h4>{item.full_name}</h4>
                                              <p>
                                                {item.position}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {/*<div className="col-3 " onClick={() => openModal()}>*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-img-top">*/}
                        {/*            <img src="./images/Rectangle 21.png"/>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h4>Варисов Аълохон<br/>*/}
                        {/*                Аббасович </h4>*/}
                        {/*            <p>*/}
                        {/*                Директор ГП «Госгеолинформцентр»<br/>*/}
                        {/*                Госкомгеологии Республики<br/>*/}
                        {/*                Узбекистан*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-3 ">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-img-top">*/}
                        {/*            <img src="./images/Rectangle 20.png"/>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h4>Талъатхўжаев Дониёр<br/> Шухратович </h4>*/}
                        {/*            <p>*/}
                        {/*                Зам.директора по инвестиц. ГП <br/>*/}
                        {/*                «Госгеолинформцентр»<br/>*/}
                        {/*                Госкомгеологии Республики<br/>*/}
                        {/*                Узбекистан*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-3 ">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-img-top">*/}
                        {/*            <img src="./images/Rectangle 19.png"/>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h4>Хакбердиев Нурбек <br/>Мусурманович </h4>*/}
                        {/*            <p>*/}
                        {/*                Зам.директора ГП <br/>*/}
                        {/*                «Госгеолинформцентр»<br/>*/}
                        {/*                Госкомгеологии Республики<br/>*/}
                        {/*                Узбекистан*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-img-top">*/}
                        {/*            <img src="./images/Rectangle 18.png"/>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h4>Мухитдинов Хикматулла<br/> Кудратович </h4>*/}
                        {/*            <p>*/}
                        {/*                начальник Отдела инженерно*/}
                        {/*                -технического и хозяйственного*/}
                        {/*                обслуживания ГП «Госгеолинформцентр» Госкомгеологии*/}

                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-img-top">*/}
                        {/*            <img src="./images/Rectangle 17.png"/>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h4>Ахмедов Кобилжон<br/> Абдуказимович </h4>*/}
                        {/*            <p>*/}
                        {/*                Госгеолфонда ГП <br/>*/}
                        {/*                «Госгеолинформцентр»<br/> Госкомгеологии Республики<br/>*/}
                        {/*                Узбекистан*/}

                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-img-top">*/}
                        {/*            <img src="./images/Rectangle 16.png"/>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h4>Курбанов Абдувахид<br/>*/}
                        {/*                Фарход огли</h4>*/}
                        {/*            <p>*/}
                        {/*                Начальник отдела<br/> государственного кадастра*/}
                        {/*                ГП <br/>«Госгеолинформцентр»<br/> Госкомгеологии*/}


                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-img-top">*/}
                        {/*            <img src="./images/Rectangle 14.png"/>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h4>Жуков Александр<br/>*/}
                        {/*                Владимировичи</h4>*/}
                        {/*            <p>*/}
                        {/*                Начальник отдела геолого<br/>-экономической оценки ГП <br/>*/}
                        {/*                «Госгеолинформцентр»<br/>*/}
                        {/*                Госкомгеологии*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-3" onClick={() => openModal()}>*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-img-top">*/}
                        {/*            <img src="./images/Rectangle 122.png"/>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h4>Головко Елена Александровна</h4>*/}
                        {/*            <p>*/}
                        {/*                Начальник отдела*/}
                        {/*                производственно-технической,*/}
                        {/*                информации ГП*/}
                        {/*                «Госгеолинформцентр» Госкомгеологии*/}
                        {/*                Республики Узбекистан*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-img-top">*/}
                        {/*            <img src="./images/Rectangle 21.png"/>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h4>Юлдашева Ирина<br/>*/}
                        {/*                Анатольевна</h4>*/}
                        {/*            <p>*/}
                        {/*                Начальник отдела нормативно<br/>*/}
                        {/*                -экономических исследований<br/>*/}
                        {/*                ГП «Госгеолинформцентр» <br/>Госкомгеологии*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-img-top">*/}
                        {/*            <img src="./images/Rectangle 21.png"/>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h4>Айтметов Улугбек<br/>*/}
                        {/*                Рустемович</h4>*/}
                        {/*            <p>*/}
                        {/*                Главный бухгалтера ГП<br/>*/}
                        {/*                "Госгеолинформцентр" <br/>Госкомгеологии Республики <br/>*/}
                        {/*                Узбекистан*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-3">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-img-top">*/}
                        {/*            <img src="./images/Rectangle 21.png"/>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-body">*/}
                        {/*            <h4>Хадиметов Ахматбой<br/> Исаматович</h4>*/}
                        {/*            <p>*/}
                        {/*                Начальник отдела ИКТ*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>


                <Modal isOpen={props.open} toggle={()=>props.stafState({open :!props.open})} className="" style={modalStyle}>
                    {/*<ModalBody>*/}
                    <div className="xodimForm1">
                        <div className="container">
                            <div className="row">
                                <div className="d-flex">
                                    <img src={props.stafSelected.img} className="ModalImgOne"/>
                                    <img src="./images/fi_x.png" className="ModalImgTwo"
                                         onClick={()=>props.stafState({open :!props.open})}/>
                                    <div className="row ml-3">
                                        <div className="col-12 mt-5"><h4>{props.stafSelected.full_name}</h4></div>
                                        <div className="col-4">
                                            <span>Мутахассислиги:</span>
                                        </div>
                                        <div className="col-8 pl-0">
                                            <a>{props.stafSelected.position}</a>
                                        </div>
                                        <div className="col-4">
                                            <span>Телефон : </span>
                                        </div>
                                        <div className="col-8 pl-0">
                                            <a>{props.stafSelected.phone}</a>
                                        </div>
                                        <div className="col-4">
                                            <span>Электронная почта: </span>
                                        </div>
                                        <div className="col-8 pl-0">
                                            <a>{props.stafSelected.email}</a>
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

const mapStateToProps =(state)=>{
    return{
        staf : state.staf.staf,
        stafSelected: state.staf.stafSelected,
        open : state.staf.open
    }
}

export default connect(mapStateToProps,{getStaf , stafState})(Stafff);
