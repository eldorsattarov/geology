import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem2 } from 'reactstrap';
const HeaderUpper = (props) => {

    useEffect(() => {

    }, []);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);
    const toggle3 = () => setDropdownOpen3(prevState => !prevState);

    const [openLink, setOpenLink] = useState(false);
    const [openLink2, setOpenLink2] = useState(false);
    const linkOpen = () => {
        setOpenLink(!openLink);
    }
    const linkOpen2 = () => {
        setOpenLink2(!openLink2);
    }

    return (
        <div className="navbarNav mb-1">
            <div className="container">
                <div className="row d-flex justify-content-between">

                    <div className="navbarNavLeft">
                        <div className={`korxona ${openLink === true ? 'active' : ""}`}>
                            <a href="#" onClick={() => linkOpen()} className="aLink">Корхона ҳақида</a>
                            <div className={`korxonaLink`}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 links d-flex justify-content-between align-items-center">
                                            <Link className="tabLink" to="/enterprise1">“Давгеолахборотмарказ” ДК мақсад ва вазифалари</Link>
                                            <a href="#"><img src="./images/fi_x2.png" onClick={()=>setOpenLink(!openLink)}/></a>
                                        </div>
                                        <div className="col-12 links"><Link className="tabLink" to="/staff">Ходимлар</Link></div>
                                        {/*<div className="col-12 links"><Link className="tabLink" to="/enterprise2">Асосий тугалланган лойиҳалар</Link></div>*/}
                                        {/*<div className="col-12 links"><Link className="tabLink" to="/enterprise2">Саноат кўрсатмалар ва қоидалар</Link></div>*/}
                                        <div className="col-12 links"><Link className="tabLink" to="/laws">Вазирлар Маҳкамасининг 546-сон қарори</Link></div>
                                        <div className="col-12 links"><Link className="tabLink" to="/youthunion">Корхона Ёшлар Иттифоқи</Link>
                                        </div>
                                        {/*<div className="col-12 links"><Link className="tabLink" to="/">Касаба уюшмаси</Link></div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`korxona2 ml-3 ${openLink2 === true ? 'active2' : ""}`}>
                            <a href="#" onClick={() => linkOpen2()} className="aLink">Интерактив хизмат</a>
                            <div className={`korxonaLink2`}>
                                <div className="container">
                                    <div className="row">
                                        {/*<div className="col-12 links d-flex justify-content-between align-items-center">*/}
                                            {/*<Link to="/" className="tabLink">Геологик ҳисоботларнинг тезислари</Link>*/}
                                            <div className="col-12 links d-flex justify-content-between align-items-center">
                                                <Link to="/reports" className="tabLink">
                                                Фойдали қазилмалар захиралари ҳаракати тўғрисида ҳисоботларни қабул қилиш (5-ГР шакли)</Link>
                                                <a href="#"><img src="./images/fi_x2.png" onClick={()=>setOpenLink2(!openLink2)}/></a>

                                            </div>

                                         {/*</div>*/}
                                        {/*<div className="col-12 links"><Link to="/cadastre">Кадастр объэктларининг паспортлари</Link></div>*/}
                                        {/*<div className="col-12 links"><Link to="/">Геологик маълумотлар тўпламини тақдим этиш</Link></div>*/}
                                        <div className="col-12 links"><Link to="/specialists" className="tabLink">Фойдали қазилмалар захиралари ҳаракати тўғрисида ҳисобот олиш учун масъул мутахассисларнинг алоқалари (5-ГР шакли)</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<a href="https://exarid.uzex.uz" target="_blank" className="aLink">Буғалтерия ҳисоботи</a>*/}
                        <Link to="/accounting" className="aLink">Молиявий хисоботлар</Link>

                        <Link to="/aloqa" className="aLink">Алоқа</Link>
                    </div>


                    <div className="navbarNavRight d-flex align-items-center">
                        <img src="./images/fi_map-pin.png" className="icons"></img>
                        <a href="http://map.uzgeolcom.uz/" target="_blank" className="aLink">Интерактив харита</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderUpper;
