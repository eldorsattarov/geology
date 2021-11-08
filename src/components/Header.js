import React, {useState} from 'react';
import HeaderUpper from "./HeaderUpper";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import {Link} from "react-router-dom";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    // select template



    return (
        <div className="navbarTop">
            <div className="container">
                <div className="row">
                    <div className="navbar1 d-flex justify-content-between align-items-center mt-1 w-100">
                        <Link to="/" className="text-decoration-none">
                            <div className="navbarTopLeft d-flex align-items-center">
                                <img src="./images/logo 1.png" className="logo"/>
                                <span className="logoText">
                                Геология ахборот маркази <br/>Давлат корхонаси
                            </span>
                            </div>
                        </Link>
                        <div className="navbarTopRight d-flex align-items-center">
                            <img src="./images/fi_search.png" className="icons"/>
                            <img src="./images/fi_eye.png" className="icons"/>
                            <Link to="/loginEtp" className="text-decoration-none">
                                <span className="eri">ЭРИ орқали кириш</span>
                            </Link>

                            <select className="border-0">
                                <option>Ўзбекча</option>
                                <option>Русский</option>
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
