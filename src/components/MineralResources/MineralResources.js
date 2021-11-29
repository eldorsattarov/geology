import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import PaginationComponent from "./PaginationComponent";
import Pagination from "./Index";
import PaginationComponent from "./PaginationComponent";


const MineralResources = () => {
    const [age, setAge] = React.useState('');
    const [age2, setAge2] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleChange2 = (event) => {
        setAge2(event.target.value);
    };
    return (
        <div>
            <Header/>
            <div className="mineralResources1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-items-center pl-0 pr-0">
                            <h1>Минерал ресурслар базаси</h1>
                            <button type="button" className="">
                                <img src="./images/arrow-down.png"/>
                                <span>Экспорт</span>
                            </button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6 pl-0">

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>ФОРМОВОЧНЫЕ МАТЕРИАЛЫ (тыс.т)</MenuItem>
                                        <MenuItem value={20}>СЫРЬЕ ДЛЯ ПРОИЗВОДСТВА ФЕРРОСИЛИЦИЯ (тыс.т)</MenuItem>
                                        <MenuItem value={30}>КАОЛИН (тыс.т)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                        </div>
                        <div className="col-6 pr-0">

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" className="w-50">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age2}
                                        label="Age"
                                        onChange={handleChange2}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4 pl-0"> <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>ФОРМОВОЧНЫЕ МАТЕРИАЛЫ (тыс.т)</MenuItem>
                                    <MenuItem value={20}>СЫРЬЕ ДЛЯ ПРОИЗВОДСТВА ФЕРРОСИЛИЦИЯ (тыс.т)</MenuItem>
                                    <MenuItem value={30}>КАОЛИН (тыс.т)</MenuItem>
                                </Select>
                            </FormControl>
                        </Box></div>
                        <div className="col-4 pr-0"> <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>ФОРМОВОЧНЫЕ МАТЕРИАЛЫ (тыс.т)</MenuItem>
                                    <MenuItem value={20}>СЫРЬЕ ДЛЯ ПРОИЗВОДСТВА ФЕРРОСИЛИЦИЯ (тыс.т)</MenuItem>
                                    <MenuItem value={30}>КАОЛИН (тыс.т)</MenuItem>
                                </Select>
                            </FormControl>
                        </Box></div>
                        <div className="col-4 d-flex align-items-end justify-content-end">
                            <span>Очистить фильтр</span>
                           <img src="./images/fi_x5.png"/>
                        </div>
                    </div>
                </div>
            </div>
            {/*Pagination*/}
            <Footer/>
        </div>
    );
};

export default MineralResources;
