import React from 'react';
import {Link} from "react-router-dom";

const TadbirkorLayout = (props) => {
    console.log(props)
    return (
        <div className="admin-layout">
            <div className="admin-layout-left">
                <div className="user-info d-flex justify-content-center align-items-center">
                        {/*<img src="../images/logotad.png" alt=""/>*/}
                        <img src="../images/logoN1.png" alt=""/>
                </div>
                <div className="menu">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/tadbirkor/korxonaHaqida" className={`nav-link ${props.history.location.pathname === "/tadbirkor/korxonaHaqida" ? 'active' : ""}`}><img src="../images/tadbirkor1.png"/><span>Корхона ҳақида</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tadbirkor/ariza" className={`nav-link ${props.history.location.pathname === "/tadbirkor/ariza" ? 'active' : ""}`}><img src="../images/tadbirkor2.png"/><span>Ариза юбориш</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tadbirkor/meningarizam" className={`nav-link ${props.history.location.pathname === "/tadbirkor/meningarizam" || props.history.location.pathname === "/tadbirkor/arizam" ? 'active' : ""}`}><img src="../images/tadbirkor3.png"/><span>Менинг аризаларим</span></Link>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <Link to="/tadbirkor/meningarizam" className={`nav-link ${props.history.location.pathname === "/tadbirkor/meningarizam" ? 'active' : ""}`}><img src="../images/tadbirkor3.png"/><span>Менинг аризаларим</span></Link>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <Link to="/tadbirkor/konxaqida" className={`nav-link ${props.history.location.pathname === "/tadbirkor/konxaqida" ? 'active' : ""}`}><img src="../images/tadbirkor4.png"/><span>Кон ҳақида маълумотлар</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tadbirkor/interaktivxarita" className={`nav-link ${props.history.location.pathname === "/tadbirkor/interaktivxarita" ? 'active' : ""}`}><img src="../images/tadbirkor5.png"/><span>Интерактив харита</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tadbirkor/vebxarita" className={`nav-link ${props.history.location.pathname === "/tadbirkor/vebxarita" ? 'active' : ""}`}><img src="../images/tadbirkor6.png"/><span>Веб-харита</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tadbirkor/beshGr" className={`nav-link ${props.history.location.pathname === "/tadbirkor/beshGr" ? 'active' : ""}`}><img src="../images/5gr.png"/><span>5-ГР шакли</span></Link>
                        </li>
                        </ul>
                </div>
            </div>
            <div className="admin-layout-right">
                <div className="adminrightTop">
                    <div className="container">
                        <div className="row">
                        <div className="col-12 d-flex align-items-center justify-content-between ">
                                {/*<h3 className="pb-0 mb-0">Корхона ҳақида</h3>*/}
                                <h3 className="pb-0 mb-0">
                                    {
                                        props.history.location.pathname !== "/tadbirkor/korxonaHaqida" ? (
                                            props.history.location.pathname === "/tadbirkor/ariza" ? "Ариза юбориш" :(
                                                props.history.location.pathname === "/tadbirkor/meningarizam" ? "Менинг аризаларим" :(
                                                    props.history.location.pathname === "/tadbirkor/konxaqida" ? "Кон ҳақида маълумотлар" :(
                                                        props.history.location.pathname === "/tadbirkor/interaktivxarita"?"Интерактив харита":(
                                                            props.history.location.pathname === "/tadbirkor/vebxarita" ? "Веб-харита" : (
                                                                props.history.location.pathname === "/tadbirkor/arizam" ? "Aризам" : (
                                                                    props.history.location.pathname === "/tadbirkor/beshGr" ? "5-ГР шакли" : ""
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ) : "Корхона ҳақида"
                                    }
                                </h3>


                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center languageSelect">
                                        <img src="../images/fi_globe2.png"/>
                                        <select>
                                            <option>Ўзбекча</option>
                                            <option>Русский</option>
                                        </select>
                                    </div>
                                   <div>
                                       <img src="../images/tadbirkor.png"/>
                                       <span>Саттаров Элдор</span>
                                   </div>
                                </div>
                        </div>
                         </div>
                    </div>
                </div>
                <div className="line"></div>
                        {props.children}
            </div>
        </div>
    );
};

export default TadbirkorLayout;
