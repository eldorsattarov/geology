import React from 'react';

const HomePageSection4 = () => {
    return (
        <div className="section4">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                           <div> <img src="./images/Ellips.png"/></div>
                            <h2>Веб-харита</h2>
                            <p>Геология ахборот маркази<br/>
                                Давлат корхонаси Веб-харита</p>
                            <div className="text-center d-flex justify-content-center">
                                <a href="#" className="btn text-center">Веб-харита
                                    <img src="./images/uzbekiston.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div><img src="./images/Ellipse 5.png"/></div>
                            <h2>Интерактив харита</h2>
                            <p>Ўзбекистон республика <br/>интерактив харита</p>
                           <div className="d-flex justify-content-center">
                               <a href="http://map.uzgeolcom.uz/" target="_blank" className="btn">Батафсил малумот
                                   <img src="./images/fi_map-pin2.png"/>
                               </a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageSection4;