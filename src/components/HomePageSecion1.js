import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const HomePageSecion1 = (props) => {

    return (
        <div className="section1">
            <div className="container">
                <div className="row">
                    <div className="col-6 pl-0 d-flex align-items-center">
                       <div>
                           <p>
                               "Уранкамёбметгеология" АЖ раҳбарияти ва бош<br/>
                               мутахассисларининг билимлари синовдан<br/>
                               ўтказилди.
                           </p>
                           <span>
                            Давлат геология қўмитаси, Саноат хавфсизлиги давлат қўмитаси,  Геологик <br/>
                            қидирув ишларини назорат қилиш Инспекцияси мутахассисларидан ташкил <br/>
                            топган комиссия томонидан "Уранкамёбметгеология" АЖ  раҳбарияти ва бош<br/>
                            мутахассисларининг меҳнатни муҳофаза қилишда хавфсизлик чоралари <br/>
                            ҳамда меъёрий - ҳуқуқий ҳужжатлар бўйича билимлари синовдан ўтказилди.
                        </span>

                       </div>
                    </div>
                    <div className="col-6 pr-0">
                        <img src="./images/Rectangle 4 (3).png" className=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageSecion1;