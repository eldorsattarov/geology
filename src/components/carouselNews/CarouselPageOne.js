import React, {useState, useEffect} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {connect} from "react-redux";
import {updateState} from "../../redux/actions/carouselNewsAction";

const CarouselPageOne = (props) => {

    const [newQisqa, setnewQisqa] = useState([]);
    const [newQisqa2, setnewQisqa2] = useState([]);
    useEffect(() => {
        axios.get(API_PATH + "Yangiliklar/")
            .then((res) => {
                setnewQisqa(res.data.results);
            })
    }, []);

    return (
        <div>
            <Header/>
            <div className="carouselPageOne">
                <div className="container">
                    <div className="row">
                        <div className="col-8 pl-0">
                            {/*<h2>Минерал ресурслар институти технологик<br/> тадқиқотларини ўтказмоқда.</h2>*/}
                            {/*{newQisqa.map((item,index)=>{*/}
                            {props.selectedNews.length!==0 ? props.selectedNews.map((item,index)=>{
                                    while (index<2){
                                        return(
                                            <div className="">
                                                <h2>{item.text}</h2>
                                                <img src={item.img}/>
                                                <p>{item.batafsil}</p>
                                            </div>
                                        )
                                    }
                                }) :
                                newQisqa.map((item,index)=>{
                               while (index<2){
                                   return(
                                       <div className="">
                                           <h2>{item.text}</h2>
                                           <img src={item.img}/>
                                           <p>{item.batafsil}</p>
                                       </div>
                                   )
                               }
                            })}
                        </div>
                        <div className="col-4">
                            <h2>Сўнгги янгиликлар</h2>
                            {newQisqa.reverse().map((item, index) => {
                                    while (index<3){
                                        return (
                                            // onClick={()=>{props.selectedNews.splice(0, 1, item)}}
                                           <Link to="/carouselPageOne" className="linkkk"
                                                 onClick={()=>{props.selectedNews.splice(0, 1, item)}}>
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
                                           </Link>
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
const mapStateToProps = (state) =>{
 return{
     news: state.news.news,
     selectedNews: state.news.selectedNews
 }
}

export default connect(mapStateToProps,{updateState})(CarouselPageOne);
