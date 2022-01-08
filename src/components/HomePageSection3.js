import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import axios from "axios";
import {API_PATH} from "../tools/constants";

const HomePageSection3 = () => {
    // let settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     pauseOnHover: true
    // };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplaySpeed: 2000,
        speed: 2000,
        autoplay:true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 554,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "#888888",
                    borderRadius: "50%",
                }}
                onClick={onClick}
            />
        );
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;

        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "#888888",
                    borderRadius: "50%",
                }}
                onClick={onClick}
            />
        );
    }


    const [newCar, setnewCar] = useState([]);
    useEffect(() => {
        axios.get(API_PATH + "Yangiliklar/")
            .then((res) => {
                setnewCar(res.data.results);
                // setnewCar(newCar.reverse())
            });
    }, []);

   // const newCarTeskari = newCar.reverse();
    return (
        <div>
            <Slider {...settings} className="overflow-hidden">
                {newCar.map((item,index) =>{
                    while (index<3){
                        return(
                            <div className="section3" key={item.id}>
                                <img src={item.img} className="w-100 NewIMG"/>
                                <img src="./images/Rectangle 50.png" className="img2"/>
                                <div className="container">
                                    <div className="row">
                                        <div className="section3Left">
                                            <p>
                                                {item.text}
                                            </p>
                                            <div className="batafsil">
                                                <span>{item.batafsil}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}


                {/*<div className="section3">*/}
                {/*    <img src="./images/new1.png" className="w-100"/>*/}
                {/*    <img src="./images/Rectangle 50.png" className="img2"/>*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="section3Left">*/}
                {/*                <p>"Уранкамёбметгеология" АЖ марказий каротаж<br/>*/}
                {/*                    отряди <a className="textBlue">геофизика тадқиқот</a> ишларини ўтказмоқда.*/}
                {/*                </p>*/}
                {/*                <span>Айни дамда геофизика тадқиқоти натижавиймаълумотлари буюртмачи<br/>*/}
                {/*        бўлмиш "Қизилқум дала қидирув экспедиция"си мутахассисларига<br/>*/}
                {/*        тақдим*/}
                {/*        этилган.*/}
                {/*        </span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/* <div className="section3">*/}
                {/*    <img src="./images/Rectangle 4.png" className="w-100"/>*/}
                {/*    <img src="./images/Rectangle 50.png" className="img2"/>*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="section3Left">*/}
                {/*                <p>"Уранкамёбметгеология" АЖ марказий каротаж<br/>*/}
                {/*                     отряди <a className="textBlue">геофизика тадқиқот</a> ишларини ўтказмоқда.*/}
                {/*                </p>*/}
                {/*                <span>Айни дамда геофизика тадқиқоти натижавиймаълумотлари буюртмачи<br/>*/}
                {/*        бўлмиш "Қизилқум дала қидирув экспедиция"си мутахассисларига<br/>*/}
                {/*        тақдим*/}
                {/*        этилган.*/}
                {/*        </span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="section3">*/}
                {/*    <img src="./images/Rectangle 4.png" className="w-100"/>*/}
                {/*    <img src="./images/Rectangle 50.png" className="img2"/>*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="section3Left">*/}
                {/*                <p>"Уранкамёбметгеология" АЖ марказий каротаж<br/>*/}
                {/*                    отряди <a className="textBlue">геофизика тадқиқот</a> ишларини ўтказмоқда.*/}
                {/*                </p>*/}
                {/*                <span>Айни дамда геофизика тадқиқоти натижавиймаълумотлари буюртмачи<br/>*/}
                {/*        бўлмиш "Қизилқум дала қидирув экспедиция"си мутахассисларига<br/>*/}
                {/*        тақдим*/}
                {/*        этилган.*/}
                {/*        </span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </Slider>
        </div>
    );
};

export default HomePageSection3;
