import React from 'react';
// import Slider from "react-slick";

const HomePageSection3 = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="section3">
            <img src="./images/Rectangle 4.png" className="w-100"/>
            <img src="./images/Rectangle 50.png" className="img2"/>
            <div className="container">
                <div className="row">
                    <div className="section3Left">
                        <p>"Уранкамёбметгеология" АЖ марказий каротаж<br/>
                            отряди <>геофизика тадқиқот</> ишларини ўтказмоқда.
                        </p>
                        <span>Айни дамда геофизика тадқиқоти натижавиймаълумотлари буюртмачи<br/>
                        бўлмиш "Қизилқум дала қидирув экспедиция"си мутахассисларига<br/>
                        тақдим
                        этилган.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageSection3;