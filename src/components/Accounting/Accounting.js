import React, {useEffect} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

import {connect} from "react-redux";
import Stack from '@mui/material/Stack';
import Pagination from "@mui/material/Pagination";
import {getAccounting,accountingState} from "../../redux/actions/accountingAction";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
                            <h1 className="accountingName">Молиявий хисоботлар</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="w-100 mt-3">
                        <Accordion className="acbacround">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className="actitle">2021 йилнинг молиявий натижалари</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        <span className="">Бизнес  план 2022Г.</span>
                            <div className="lineac"></div>
                            <span>2021 йил учун бизнес режа</span>
                            <div className="lineac mb-0"></div>

                          {/*ichidagi acardionlar*/}

                            <Accordion className="acbacround2">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className="border-0"
                                >
                                    <Typography className="actitle2">1-чорак учун</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div><span className="">Бухгалтерский баланс - форма № 1</span></div>
                                       <div> <span>Отчет о финансовых результатах - форма № 2</span></div>
                                        <div><span>КПЭ</span></div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <div className="lineac2"></div>
                            <Accordion className="acbacround2">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className="border-0"
                                >
                                    <Typography className="actitle2">2-чорак учун</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div><span className="">Бухгалтерский баланс - форма № 1</span></div>
                                       <div> <span>Отчет о финансовых результатах - форма № 2</span></div>
                                        <div><span>КПЭ</span></div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <div className="lineac2"></div>
                            <Accordion className="acbacround2">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className="border-0"
                                >
                                    <Typography className="actitle2">3-чорак учун</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div><span className="">Бухгалтерский баланс - форма № 1</span></div>
                                        <div> <span>Отчет о финансовых результатах - форма № 2</span></div>
                                        <div><span>КПЭ</span></div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <div className="lineac2"></div>
                            <Accordion className="acbacround2">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    className="border-0"
                                >
                                    <Typography className="actitle2">4-чорак учун</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div><span className="">Бухгалтерский баланс - форма № 1</span></div>
                                        <div> <span>Отчет о финансовых результатах - форма № 2</span></div>
                                        <div><span>КПЭ</span></div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </Typography>
                        </AccordionDetails>
                        </Accordion>
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

const mapStateToProps = (state) =>{
    return{
        accounting : state.accounting.accounting
    }
}

export default connect(mapStateToProps,{getAccounting,accountingState})(Accounting);
