import React, {useState} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import DropdownItem2 from "./DropdownItem2";
import {Collapse} from "react-collapse";

const Enterprise1 = () => {
    const [isDropdownOpen, setisDropdownOpen] = useState(false);
    const [isDropdownOpen2, setisDropdownOpen2] = useState(false);

    const onDropdownClicked = () => {
        setisDropdownOpen(!isDropdownOpen);
    };
    const onDropdownClicked2 = () => {
        setisDropdownOpen2(!isDropdownOpen2);
    };

    return (
        <div>
            <Header/>
            <div className="enterpriseOne">
                <div className="container">
                    <div className="row">

                        <div className="">
                            <DropdownItem2 theme="white">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h1>Корхонасининг асосий мақсади</h1>
                                                <button className="border-0 bg-transparent" onClick={() => onDropdownClicked()}>
                                                    <img
                                                        src={`${isDropdownOpen == true ? "./images/Vector2.png" : "./images/plus.png"}`}
                                                    />
                                                </button>
                                            </div>
                                            <Collapse isOpened={isDropdownOpen}>
                                                <span>
                                        Ўзбекистон Давлат Геология Қўмитаси (Давгеолқўм) 1991 йил 12 февралдан Ўзбекистон Республикаси Президенти томонидан <br/>
                                        № ПҚ-142-сонли қарорига биноан ташкил қилинган ва Ўзбекистон Республикаси Вазирлар Маҳкамасининг 27.04.2018 йилдаги<br/>
                                        315-сонли Қарорига мувофиқ “Ўзбекистон
                                        Республикаси Давлат геология ва минерал ресурслар қўмитаси тўғрисида Низом”и тасдиқланишига амал қилади.
                                                 </span>
                                            </Collapse>
                                        </div>
                                    </div>
                                </div>
                            </DropdownItem2>
                        </div>

                        <div className="mt-5">
                            <DropdownItem2 theme="white">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            {/*<div className="col-12">*/}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h1>Корхонасининг асосий вазифалари</h1>
                                                    <button className="border-0 bg-transparent" onClick={() => onDropdownClicked2()}>
                                                    <img
                                                        src={`${isDropdownOpen2 == true ? "./images/Vector2.png" : "./images/plus.png"}`}
                                                    />
                                                </button>
                                                </div>
                                            {/*</div>*/}
                                            <Collapse isOpened={isDropdownOpen2}>
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
                            </DropdownItem2>
                        </div>

                        <div className="maqsadliAud mt-4 mb-3">
                            <h1>Мақсадли аудитория </h1>
                            <p>Мақсадли аудиторияси қуйидаги фойдаланувчилар гуруҳлари билан ифодаланади:</p>
                        </div>
                    </div>

                    <div className="row w-100">
                        <div className="col-4 pl-0 mt-3">
                            <div className="cicrle">
                                <img src="./images/circle.png"/>
                                <span>1</span>
                            </div>
                            <h6 className="mt-2 cicrleText">
                                Давлат геология қўмитаси фаолиятига қизиққан,<br/>
                                у билан муайян масалалар бўйича ўзаро алоқада<br/>
                                бўлган халқаро шериклар
                            </h6>
                        </div>
                        <div className="col-4 pl-0 mt-3">
                            <div className="cicrle">
                                <img src="./images/circle.png"/>
                                <span>2</span>
                            </div>
                            <h6 className="mt-2 cicrleText">
                                Корхона фаолиятига қизиққан маҳаллий<br/>
                                компаниялар, у билан муайян масалалар бўйича<br/>
                                ўзаро алоқада бўлиш
                            </h6>
                        </div>
                        <div className="col-4 pl-0 mt-3">
                            <div className="cicrle">
                                <img src="./images/circle.png"/>
                                <span>3</span>
                            </div>
                            <h6 className="mt-2 cicrleText">
                                Давлат геология қўмитаси ва у билан муайян<br/>
                                масалалар бўйича ўзаро алоқада бўлган<br/>
                                корхоналар фаолиятига қизиққан фуқаролар
                            </h6>
                        </div>
                        <div className="col-4 pl-0 mt-3">
                            <div className="cicrle">
                                <img src="./images/circle.png"/>
                                <span>4</span>
                            </div>
                            <h6 className="mt-2 cicrleText">
                                Давлат геология қўмитаси ва корхона раҳбарияти<br/> ва
                                ходимлари
                            </h6>
                        </div>
                        <div className="col-4 pl-0 mt-3">
                            <div className="cicrle">
                                <img src="./images/circle.png"/>
                                <span>5</span>
                            </div>
                            <h6 className="mt-2 cicrleText">
                                Оммавий ахборот воситалари
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Enterprise1;