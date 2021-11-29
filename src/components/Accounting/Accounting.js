import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";


import Stack from '@mui/material/Stack';
import Pagination from "@mui/material/Pagination";

const Accounting = () => {

    return (
        <div>
            <Header/>
            <div className="accounting">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pl-0">
                            <h1 className="accountingName">Буғалтерия ҳисоботи</h1>
                        </div>
                        <div className="accountingSection">
                            <span>2021 йил биринчи чорак тугалалишига буғалтерия ҳисоботи</span>
                            <a href="#"> <img src="./images/fi_download.png"/></a>
                        </div>
                        <div className="accountingSection">
                            <span>2020 йил биринчи чорак тугалалишига буғалтерия ҳисоботи</span>
                            <a href="#"> <img src="./images/fi_download.png"/></a>
                        </div>
                        <div className="accountingSection">
                            <span>2019 йил биринчи чорак тугалалишига буғалтерия ҳисоботи</span>
                            <a href="#"> <img src="./images/fi_download.png"/></a>
                        </div>
                        <div className="accountingSection">
                            <span>2018 йил биринчи чорак тугалалишига буғалтерия ҳисоботи</span>
                            <a href="#"> <img src="./images/fi_download.png"/></a>
                        </div>
                        <div className="accountingSection">
                            <span>2017 йил биринчи чорак тугалалишига буғалтерия ҳисоботи</span>
                            <a href="#"> <img src="./images/fi_download.png"/></a>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <Stack spacing={1}>
                        <Pagination count={10} variant="outlined" shape="rounded" color="primary"></Pagination>
                        </Stack>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Accounting;
