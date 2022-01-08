import React, {useEffect, useState} from 'react';
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
import {API_PATH} from "../../tools/constants";

// import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';


const Accounting = (props) => {

    const [xisobot,setXisobot] = useState([]);
    const [xisobot2,setXisobot2] = useState([]);

    useEffect(()=>{
    // props.getAccounting()
        axios.get(API_PATH + "Moliyaviy-hisobotlar/")
            .then((res)=>{
                setXisobot(res.data.results);
            })
        axios.get(API_PATH + "Moliyaviy-hisobotlar-choraklar/")
            .then((res)=>{
                setXisobot2(res.data.results);
            })
    },[]);
   // const xisobotA = xisobot.reverse();
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
                    {xisobot.reverse().map((item,index)=>{
                        return(

                                <div className="w-100 mt-3">
                                    <Accordion className="acbacround">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className="actitle">{item.yil_title}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <a href={item.file1} className="" target="_blank">{item.sub_title1}</a>
                                                <div className="lineac"></div>
                                                <a href={item.file2} className="" target="_blank">{item.sub_title2}</a>
                                                <div className="lineac mb-0"></div>

                                                {/*ichidagi acardionlar choraklar*/}

                                                {
                                                    xisobot2.map((item2,index2)=>{
                                                    return(
                                                        item.id===item2.yil ?
                                                        <div>
                                                            <Accordion className="acbacround2">
                                                                <AccordionSummary
                                                                    expandIcon={<ExpandMoreIcon />}
                                                                    aria-controls="panel1a-content"
                                                                    id="panel1a-header"
                                                                    className="border-0"
                                                                >
                                                                    <Typography className="actitle2">{item2.title}</Typography>
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <Typography>
                                                                        <div><a href={item2.file1} target="_blank">{item2.file_name1}</a></div>
                                                                        <div> <a href={item2.file2} target="_blank">{item2.file_name2}</a></div>
                                                                        <div><a href={item2.file3} target="_blank">{item2.file_name3}</a></div>
                                                                    </Typography>
                                                                </AccordionDetails>
                                                            </Accordion>
                                                            <div className="lineac2"></div>
                                                        </div> :""
                                                    )
                                                })
                                                }

                                                {/*<Accordion className="acbacround2">*/}
                                                {/*    <AccordionSummary*/}
                                                {/*        expandIcon={<ExpandMoreIcon />}*/}
                                                {/*        aria-controls="panel1a-content"*/}
                                                {/*        id="panel1a-header"*/}
                                                {/*        className="border-0"*/}
                                                {/*    >*/}
                                                {/*        <Typography className="actitle2">2-чорак учун</Typography>*/}
                                                {/*    </AccordionSummary>*/}
                                                {/*    <AccordionDetails>*/}
                                                {/*        <Typography>*/}
                                                {/*            <div><span className="">Бухгалтерский баланс - форма № 1</span></div>*/}
                                                {/*            <div> <span>Отчет о финансовых результатах - форма № 2</span></div>*/}
                                                {/*            <div><span>КПЭ</span></div>*/}
                                                {/*        </Typography>*/}
                                                {/*    </AccordionDetails>*/}
                                                {/*</Accordion>*/}
                                                {/*<div className="lineac2"></div>*/}
                                                {/*<Accordion className="acbacround2">*/}
                                                {/*    <AccordionSummary*/}
                                                {/*        expandIcon={<ExpandMoreIcon />}*/}
                                                {/*        aria-controls="panel1a-content"*/}
                                                {/*        id="panel1a-header"*/}
                                                {/*        className="border-0"*/}
                                                {/*    >*/}
                                                {/*        <Typography className="actitle2">3-чорак учун</Typography>*/}
                                                {/*    </AccordionSummary>*/}
                                                {/*    <AccordionDetails>*/}
                                                {/*        <Typography>*/}
                                                {/*            <div><span className="">Бухгалтерский баланс - форма № 1</span></div>*/}
                                                {/*            <div> <span>Отчет о финансовых результатах - форма № 2</span></div>*/}
                                                {/*            <div><span>КПЭ</span></div>*/}
                                                {/*        </Typography>*/}
                                                {/*    </AccordionDetails>*/}
                                                {/*</Accordion>*/}
                                                {/*<div className="lineac2"></div>*/}
                                                {/*<Accordion className="acbacround2">*/}
                                                {/*    <AccordionSummary*/}
                                                {/*        expandIcon={<ExpandMoreIcon />}*/}
                                                {/*        aria-controls="panel1a-content"*/}
                                                {/*        id="panel1a-header"*/}
                                                {/*        className="border-0"*/}
                                                {/*    >*/}
                                                {/*        <Typography className="actitle2">4-чорак учун</Typography>*/}
                                                {/*    </AccordionSummary>*/}
                                                {/*    <AccordionDetails>*/}
                                                {/*        <Typography>*/}
                                                {/*            <div><span className="">Бухгалтерский баланс - форма № 1</span></div>*/}
                                                {/*            <div> <span>Отчет о финансовых результатах - форма № 2</span></div>*/}
                                                {/*            <div><span>КПЭ</span></div>*/}
                                                {/*        </Typography>*/}
                                                {/*    </AccordionDetails>*/}
                                                {/*</Accordion>*/}

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>

                        )
                    })}
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
