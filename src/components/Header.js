import React from 'react';
import HeaderUpper from "./HeaderUpper";

const Header = () => {
    return (
        <div className="navbarTop">
            <div className="container">
                <div className="row">
                    <div className="navbar1 d-flex justify-content-between align-items-center mt-1 w-100">
                        <div className="navbarTopLeft d-flex align-items-center">
                            <img src="./images/logo 1.png" className="logo"/>
                            <span className="logoText">
                                Геология ахборот маркази <br/>Давлат корхонаси
                            </span>
                        </div>
                        <div className="navbarTopRight d-flex align-items-center">
                            <img src="./images/fi_search.png" className="icons"/>
                            <img src="./images/fi_eye.png" className="icons"/>
                            <span className="eri">ЭРИ  КИРИШ</span>
                            <select className="border-0">
                                <option value="oz">Ўзбекча</option>
                                <option value="uz">Uzbek</option>
                                <option value="en">English</option>
                                <option value="ru">Russia</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderUpper/>
        </div>
    );
};

export default Header;