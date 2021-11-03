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

        // "@emotion/styled": "latest",
        // "@emotion/react": "latest"
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


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
                            <span className="eri">ЭРИ орқали кириш</span>
                            {/*<select className="border-0">*/}
                            {/*    <option value="oz">Ўзбекча</option>*/}
                            {/*    <option value="uz">Uzbek</option>*/}
                            {/*    <option value="en">English</option>*/}
                            {/*    <option value="ru">Russia</option>*/}
                            {/*</select>*/}



                            {/*<Box sx={{ minWidth: 120 }}>*/}
                            {/*<FormControl fullWidth>*/}
                            {/*<InputLabel id="demo-simple-select-label">Language</InputLabel>*/}
                            {/*<Select*/}
                            {/*labelId="demo-simple-select-label"*/}
                            {/*id="demo-simple-select"*/}
                            {/*label="Language"*/}
                            {/*onChange={handleChange}*/}
                            {/*>*/}
                            {/*<MenuItem value={10}><div>*/}
                            {/*    <img src="./images/down.png" style={{width:"10px",height:"10px"}}/>*/}
                            {/*</div></MenuItem>*/}
                            {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                            {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                            {/*</Select>*/}
                            {/*</FormControl>*/}
                            {/*</Box>*/}


                        </div>
                    </div>
                </div>
            </div>
            <HeaderUpper/>
        </div>
    );
};

export default Header;
