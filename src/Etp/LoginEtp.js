import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {toast} from "react-toastify";
import * as eimzoService from "../eImzo/services/eimzo";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const LoginEtp = () => {
    // new dropdown page
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    /////////


    const [isOpen, setOpen] = useState(false);

    // drop faction
    const [valuea, setValue] = useState('');

    // New e imzo function
    const [keys, setKeys] = useState([]);
    const [selectedKey, setselectedKey] = useState(null);
    const [obj, setobj] = useState("elektron kalit");
    const [result, setresult] = useState("");

    useEffect(() => {
        eimzoService.startApi();
        eimzoService.getAllCertificates().then((res) => {
            console.log(res);
            setKeys(res);
            setselectedKey(res[0]?.serialNumber);
        });
    }, []);

    const sign = async () => {
        setresult("");
        const keyId = await eimzoService.preLoadKey(keys.find(item => item?.serialNumber === selectedKey));
        eimzoService.postLoadKey(keyId, obj).then((res) => {
            setresult(res);
            toast.success("Success");
        })
            .catch((error) => {
                toast.error("Error");
            });
        // console.log("sign ishlayapdi");
        // console.log(selectedKey);

    }

    // ozim yozganim sign-->

    const handleSetValue = item => {
        console.log("item chiqadi")
        console.log(item)
        setValue(item);
        setselectedKey(item.serialNumber);
        console.log("selected key ")
        console.log(selectedKey)
    }

    return (
        <div className="">

            <Header/>
            <div className="loginEtp d-flex justify-content-center align-items-center">
                <div className="etpPage">
                    <div className="container">
                        <div className="row etpTop">
                            <div className="col-5">

                            </div>
                            <div className="col-7 d-flex justify-content-between">
                                <span>Тадбиркор шахсий кабинет</span>
                                {/*<select className="border-0">*/}
                                {/*    <option>Ўзбекча</option>*/}
                                {/*    <option>Русский</option>*/}
                                {/*</select>*/}
                            </div>
                        </div>

                        <div className="row etpBottom">
                            <div className="col-5 d-flex align-items-center">
                                <img src="./images/pngwing 1.png"/>
                                <div className="line">

                                </div>
                                <div className="">
                                    <div>
                                        <p>
                                            Ўзбекистон республикаси<br/>
                                            Геология ахборот маркази<br/>
                                            Давлат корхонаси
                                        </p>
                                    </div>
                                    <div>
                                        <span className="font-weight-bold">Telefon:</span>
                                    </div>
                                    <div>
                                        <span>+998 71 256-86-58</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">

                                <div className="TabOpen1">

                                    <div className="eimzoModal" isOpen={isOpen} toggle={() => setOpen(!isOpen)}>

                                        <div className="d-flex justify-content-center">
                                            <div className="App">
                                                <div toggle={() => setOpen(!isOpen)} className="d-flex align-items-center">
                                                    <div className="d-flex align-items-center eimzo">
                                                        {/*<img src="../logo.png" className="openLock2"/>*/}
                                                        <span className="etp2">Вход с помощью ЭЦП</span>
                                                    </div>
                                                </div>
                                                <div className="group d-flex align-items-center Group">

                                                    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="drop">

                                                        <DropdownToggle
                                                            className="dropToggle d-flex justify-content-between align-items-center">
                                    <span className="dropToggle2">
                                        {valuea !== "" ? valuea.inn + " - " + valuea.parsedAlias.cn.toUpperCase() :
                                            (keys.length == 1 ? keys[0].inn + " - " + keys[0].parsedAlias.cn.toUpperCase() : "Выберите ключ")}
                                    </span>
                                                            <img src="./images/down2.png" className="toggleImg"/>
                                                        </DropdownToggle>

                                                        <DropdownMenu className="dropMenu">
                                                            {keys.map((item, i) => (
                                                                <DropdownItem key={item.inn} className="dropItem"
                                                                              onClick={() => handleSetValue(item)}>
                                                                    <div className="d-flex align-items-center">
                                                                        <img src="./images/etp.png"/>
                                                                        <b className="textB">№ СЕРТИФИКАТА:</b>
                                                                        <span className="textB">{item.serialNumber}</span>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <b>INN: </b>
                                                                        <span className="textB">{item?.inn}</span>
                                                                        <b className="textB">{item.parsedAlias.uid ? "ФИЗИЧЕСКОE ЛИЦО" : "ЮРИДИЧЕСКОE ЛИЦО"}</b>
                                                                    </div>
                                                                    <div className="d-flex align-items-center">
                                                                        <b>Ф.И.О.: </b>
                                                                        <span
                                                                            className="textB">{item?.parsedAlias?.cn?.toUpperCase()}</span>
                                                                    </div>
                                                                    <div className="d-flex align-items-center srok">
                                                                        <b>Срок дествия сертификата: </b>
                                                                        <span
                                                                            className="">{item.parsedAlias.validfrom} - {item.parsedAlias.validto}</span>
                                                                    </div>
                                                                </DropdownItem>
                                                            ))}
                                                        </DropdownMenu>
                                                    </Dropdown>

                                                </div>
                                                <div className="group d-none">
                                                    <textarea placeholder="text"
                                                              onChange={e => setobj(e.target.value)}/>
                                                </div>
                                                {/*<div className="group">*/}
                                                    <button className="d-flex justify-content-center align-items-center signEtp d-block ml-auto"
                                                            onClick={sign}
                                                            disabled={!selectedKey || !obj || valuea === ""}
                                                    >
                                                        <img src="./images/fi_log-in.png" className="openLock"/>
                                                        <span className="imzolash">Кириш</span>
                                                    </button>
                                                {/*</div>*/}

                                                {result !== "" && (
                                                    <div className="group">
                                                        <textarea style={{height: "500px"}}>{result}</textarea>
                                                    </div>
                                                )}

                                                {/*<ul className="dropdown-menu keysDropdownMenu" aria-labelledby="leDropdownMenu1">*/}
                                                {/*  <li><a href="#" onClick="uiComboSelect('itm-77957EB8-0')"><img src="/src/assets/pfx.ico" alt="#"/> <b>SERTIFIKAT*/}
                                                {/*    №:</b> 77957eb8<br/><b>STIR:</b> 490183397 <b>JISMONIY SHAXS</b><br/><b>F.I.Sh.:</b>AZIMOV BOBUR BAXRAMDJONOVICH<br/><font*/}
                                                {/*    size="-2"><b>Sertifikatni amal qilish muddati:</b> 20.08.2021 - 20.08.2023</font>*/}
                                                {/*    </a>*/}
                                                {/*  </li>*/}
                                                {/*</ul>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default LoginEtp;
