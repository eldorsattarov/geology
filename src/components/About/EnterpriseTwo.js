import React, {useState} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import DropdownItem from "./DropdownItem";

import {Collapse} from "react-collapse";
import DropdownItem2 from "./DropdownItem2";
const EnterpriseTwo = () => {
    const [isDropdownOpen3, setisDropdownOpen3] = useState(false)

    const onDropdownClicked3 = () => {
        setisDropdownOpen3(!isDropdownOpen3);
    };
    return (
        <div>
            <Header/>
            <div className="enterpriseOne">
            <div className="container pl-0 pr-0">
                <div className="row">
                        <DropdownItem className="" theme="white">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h1>Лойиҳа-смета ҳужжатларини экспертизаси</h1>
                                            <button className="border-0 bg-transparent" onClick={() => onDropdownClicked3()}>
                                                <img
                                                    src={`${isDropdownOpen3 == true ? "./images/Vector2.png" : "./images/plus.png"}`}
                                                />
                                            </button>
                                        </div>
                                        <Collapse isOpened={isDropdownOpen3}>
                                            <div className="row mb-3">
                                                <div className="col-6">
                                                    <div className=" mt-3 d-flex ">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                                                 ўз ваколатлари доирасида геологик қидирув ишларини <br/>
                                            ривожлантиришнинг йиллик, ўрта муддатли ва узоқ муддатли <br/>
                                            дастурларини ишлаб чиқиш ва шакллантиришда иштирок<br/>
                                            этиш
                                            </span>
                                                    </div>
                                                    <div className=" mt-3 d-flex ">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                                                ахборот хизматларини кўрсатиш манфаатдор юридик ва жисмоний<br/>
                                                шахслар
                                            </span>
                                                    </div>
                                                    <div className=" mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                                           фойдали қазилмалар учун жаҳон нархлари, асбоб -ускуналар ва моддий<br/>
                                           -техник ресурслар нархлари, тематик шарҳлар ва / ёки маълумотларни <br/>
                                           тузиш орқали корхоналарнинг молиявий -иқтисодий ҳолатини кузатиш
                                            </span>
                                                    </div>
                                                    <div className=" mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                                          лицензиялашнинг техник -иқтисодий асосланиши (ТИА), кенгайтирилган<br/>
                                          техник -иқтисодий асослаш (якуний техник -иқтисодий асослаш)
                                            </span>
                                                    </div>
                                                    <div className=" mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                                      геология -қидирув ишларини компютерлаштириш мониторинги ва<br/>
                                      геологик қидирувнинг тармоқ электрон банкини тўлдириш ва қўллаб -<br/>
                                      қувватлаш, уларни бошқариш тизимини ишлаб чиқиш
                                            </span>
                                                    </div>
                                                    <div className=" mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                                   қоғоз ва электрон коллекцияларда ахборот ва визуал геологик <br/>
                                   материалларни (хариталар, атласлар, коллекциялар ва бошқалар) <br/>
                                   яратиш ва кўпайтириш
                                            </span>
                                                    </div>
                                                    <div className=" mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                                  давлат тилига таржима қилиш, патент-лицензиялаш ва ихтирочилик<br/>
                                  фаолияти, геология саноати учун кутубхона ва ахборот хизматлари,<br/>
                                  геологик ахборотни йиғиш, назорат қилиш, қайта ишлаш ва тақдим <br/>
                                  этиш, геологик материалларни йиғиш ва рўйхатга олиш, геологик<br/>
                                  ҳисоботларни инвентаризация қилиш ва уларни каталоглаштириш
                                            </span>
                                                    </div>
                                                    <div className=" mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                     қонун ҳужжатларида тақиқланмаган бошқа фаолият билан шуғулланиш
                                            </span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                                               минерал -хомашё базасининг ҳолатини ва унинг ривожланиш <br/>
                                               истиқболларини баҳолаш
                                            </span>
                                                    </div>
                                                    <div className="mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                                              ҳисоботларда, хариталарда, атласларда ва бошқа юридик ва жисмоний<br/>
                                              шахсларда белгиланган тартибда акс эттирилган ер ости бойликлари <br/>
                                              ҳақидаги геологик ва бошқа маълумотларни йиғиш, қайта ишлаш,<br/>
                                              сақлаш ва узатиш
                                            </span>
                                                    </div>
                                                    <div className="mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                                           саноат корхоналари учун патент ва лицензиялаш тадқиқотларини<br/>
                                           ўтказиш
                                            </span>
                                                    </div>
                                                    <div className="mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                                       меъёрий ҳужжатларни, геологик ишларнинг прогнозини,<br/>
                                       молиялаштириш бўйича кўрсатмаларни, эр ости бойликларини геологик<br/>
                                       ўрганиш бўйича ишларни ва бошқа лойиҳалар ва сметаларни ишлаб чиқиш
                                            </span>
                                                    </div>
                                                    <div className="mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                                      тармоқ илмий -техник кутубхонаси фондини тўлдириш, унинг<br/>
                                      хавфсизлигини таъминлаш
                                            </span>
                                                    </div>
                                                    <div className="mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                                   фойдали қазилмалар конлари ва уларнинг пайдо бўлишини, шунингдек <br/>
                                   техноген минерал тузилмаларини геологик ўрганиш бўйича тадбирлар<br/>
                                   ўтказиш, саноат корхоналари ёки хўжалик юритувчи субъэктлар (эр<br/>
                                   ости бойликларидан фойдаланувчилар) олиб бораётган қидирув ва<br/>
                                   қидирув ишларининг нархини баҳолаш
                                            </span>
                                                    </div>
                                                    <div className="mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                           эр ости бойликларини геологик қидириш натижалари бўйича саноат <br/>
                           архивини, шу жумладан электрон архивини юритиш
                                            </span>
                                                    </div>
                                                    <div className="mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
                     махфийликни таъминлаш, давлат сирини ташкил этувчи <br/>
                     маълумотларни ҳимоя қилиш бўйича чора -тадбирларни амалга ошириш
                                            </span>
                                                    </div>
                                                    <div className="">
                                                        <h6>Давгеолэкспертизанинг 2018 йилдаги натижалари </h6>
                                                    </div>
                                                    <div className="mt-3 d-flex">
                                                        <div className="mr-2"><img src="./images/Ellipsee.png"/>
                                                        </div>
                                                        <span>
              тижорат сирини ташкил этувчи маълумотларнинг мазмуни, кўлами ва<br/>
              ҳимоя тартибини белгилаш
                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </div>
                                </div>
                            </div>
                        </DropdownItem>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default EnterpriseTwo;
