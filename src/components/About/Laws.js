import React, {useState, useEffect} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {Modal, ModalHeader, ModalBody, ModalFooter, Label} from "reactstrap";
import {AvForm , AvField} from "availity-reactstrap-validation";
const Laws = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [pdfDoc , setPdfDoc] = useState('');
    const [pdfDoc2 , setPdfDoc2] = useState('');

    const openModal = () => {
        setOpen(true);
    }
    const openModal2 = () => {
        setOpen2(true);
    }

    const inputValue =(e)=>{setPdfDoc(e.target.value)}
    const inputValue2 =(e)=>{setPdfDoc2(e.target.value)}

    console.log(pdfDoc);
    return (
        <div>
            <Header/>
            <div className="laws">
                <div className="container">
                    <div className="row">
                        <div className="col-6 pl-0">
                            <div>
                                <div className=""><h1>Вазирлар махкамасининг 546 сонли<br/>карори</h1></div>
                                <div className=""><span>1 Июль 2021</span></div>
                                <div className="textLaws"><p>Норуда фойдали қазилмаларни ўз ичига олган ер қаъри
                                    участкаларидан
                                    фойдаланиш ҳуқуқини бериш жараёнини янада такомиллаштириш чора-тадбирлари тўғрисида
                                    01.07.2019 йилдаги 546-сонли қарори.</p></div>
                            </div>
                            <div className="">
                                <p>
                                    <div className="lawsLink" onClick={() => openModal()}>
                                        <span>Юклаб олиш </span>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div>
                                <div className=""><h1>Вазирлар махкамасининг 403 сонли<br/>
                                    карори</h1></div>
                                <div className=""><span>1 Июль 2021</span></div>
                                <div className="textLaws"><p>Ер қаъри участкаларидан фойдаланиш ҳуқуқи учун лицензиялар
                                    бериш
                                    тартибини янада такомиллаштириш чора-тадбирлари тўғрисида 23.06.2020 йилдаги
                                    403-сонли
                                    қарори.</p></div>
                            </div>
                            <div className="">
                                <p>
                                    <div className="lawsLink" onClick={() => openModal2()}>
                                        <span>Юклаб олиш </span>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <Modal isOpen={open} toggle={() => setOpen(!open)} className="">
                <div className="lawsModal">
                    <div className="lawsModalBody">
                        <div className="container">
                            <div className="row">
                                <div className="col-12"><h4>Вазирлар махкамасининг 546 сонли карори</h4></div>
                                <div className="col-12 mt-3"><span>1 Июль 2021</span></div>
                                <div className="col-12 labelInput">

                                    <form>
                                    <label for="a">
                                        <div className="">
                                            <input type="radio" id="b" name="doc" onClick={e=>inputValue(e)} value="pdf"/><span>PDF</span>
                                        </div>
                                        <div className="">
                                            <input type="radio" id="b" name="doc" onClick={e=>inputValue(e)} value="doc"/><span>DOC</span>
                                        </div>
                                    </label>
                                    </form>

                                </div>

                                <div className="col-12 text-right">
                                        <a href="#" className="yuklash1" onClick={()=>setOpen(!open)}><span>Бекор қилиш</span></a>

                                        <a target={`${pdfDoc==="pdf" ? "_blank" : ""}`}
                                           href={`${pdfDoc !== '' ? (pdfDoc==="pdf" ? "./qarorlar/546pdf.pdf" : 
                                               "./qarorlar/546word.doc") : "#"}`} className="yuklash"><span>Юклаб олиш</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal isOpen={open2} toggle={() => setOpen2(!open2)} className="">
                <div className="lawsModal">
                    <div className="lawsModalBody">
                        <div className="container">
                            <div className="row">
                                <div className="col-12"><h4>Вазирлар махкамасининг 403 сонли
                                    карори</h4></div>
                                <div className="col-12 mt-3"><span>1 Июль 2021</span></div>
                                <div className="col-12 labelInput">

                                    <form>
                                    <label for="a">
                                        <div className="">
                                            <input type="radio" id="b" name="doc" onClick={e=>inputValue2(e)} value="pdf"/><span>PDF</span>
                                        </div>
                                        <div className="">
                                            <input type="radio" id="b" name="doc" onClick={e=>inputValue2(e)} value="doc"/><span>DOC</span>
                                        </div>
                                    </label>
                                    </form>

                                </div>

                                <div className="col-12 text-right">
                                        <a href="#" className="yuklash1" onClick={()=>setOpen2(!open2)}><span>Бекор қилиш</span></a>

                                        <a target={`${pdfDoc2==="pdf" ? "_blank" : ""}`}
                                           href={`${pdfDoc2 !== '' ? (pdfDoc2==="pdf" ? "./qarorlar/403pdf.pdf" : 
                                               "./qarorlar/403word.doc") : "#"}`} className="yuklash"><span>Юклаб олиш</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Footer/>
        </div>
    );
};

export default Laws;
