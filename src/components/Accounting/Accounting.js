import React, {useEffect} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

import {connect} from "react-redux";
import Stack from '@mui/material/Stack';
import Pagination from "@mui/material/Pagination";
import {getAccounting,accountingState} from "../../redux/actions/accountingAction";

const Accounting = (props) => {


    useEffect(()=>{
    props.getAccounting()
    },[]);

    return (
        <div>
            <Header/>
            <div className="accounting">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pl-0">
                            <h1 className="accountingName">Буғалтерия ҳисоботи</h1>
                        </div>
                    </div>
                    <div className="row">
                        {props.accounting.map((item, index)=>{
                            return(
                                <div className="accountingSection" key={item.id}>
                                    <span>{item.text}</span>
                                    <a href={item.excel_file}> <img src="./images/fi_download.png"/></a>
                                </div>
                            )
                        })}
                        {/*<div className="accountingSection">*/}
                        {/*    <span>2021 йил биринчи чорак тугалалишига буғалтерия ҳисоботи</span>*/}
                        {/*    <a href="#"> <img src="./images/fi_download.png"/></a>*/}
                        {/*</div>*/}
                        {/*<div className="accountingSection">*/}
                        {/*    <span>2020 йил биринчи чорак тугалалишига буғалтерия ҳисоботи</span>*/}
                        {/*    <a href="#"> <img src="./images/fi_download.png"/></a>*/}
                        {/*</div>*/}
                        {/*<div className="accountingSection">*/}
                        {/*    <span>2019 йил биринчи чорак тугалалишига буғалтерия ҳисоботи</span>*/}
                        {/*    <a href="#"> <img src="./images/fi_download.png"/></a>*/}
                        {/*</div>*/}
                        {/*<div className="accountingSection">*/}
                        {/*    <span>2018 йил биринчи чорак тугалалишига буғалтерия ҳисоботи</span>*/}
                        {/*    <a href="#"> <img src="./images/fi_download.png"/></a>*/}
                        {/*</div>*/}
                        {/*<div className="accountingSection">*/}
                        {/*    <span>2017 йил биринчи чорак тугалалишига буғалтерия ҳисоботи</span>*/}
                        {/*    <a href="#"> <img src="./images/fi_download.png"/></a>*/}
                        {/*</div>*/}
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

const mapStateToProps = (state) =>{
    return{
        accounting : state.accounting.accounting
    }
}

export default connect(mapStateToProps,{getAccounting,accountingState})(Accounting);
