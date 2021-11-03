import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

const Laws = () => {
    return (
        <div>
            <Header/>
            <div className="laws">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pl-0"><h1>Вазирлар махкамасининг 546 сонли<br/>карори</h1></div>
                        <div className="col-12 pl-0"><span>1 Июль 2021</span></div>
                        <div className="col-12 pl-0"><p>Ер қаъри тўғрисидаги қонун, Вазирлар Маҳкамасининг
                            01.07.2019 <br/>
                            йилдаги 546 -сонли қарори. ва 23.06.2020 йилдаги 403 -сон</p></div>
                        <div className="col-12 pl-0">
                            <div className="lawsLink">
                            <a href="#">Юклаб олиш </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Laws;