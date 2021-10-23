import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const HeaderUpper = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);
    const toggle3 = () => setDropdownOpen3(prevState => !prevState);
    return (
        <div className="navbarNav mb-1">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="navbarNavLeft">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="drop">
                            <DropdownToggle className="dropToogle">
                                Корхона ҳақида
                                <img className="dropImg" src={dropdownOpen===true ? "./images/arrow-up-icon-436.png" : "./images/Path.png"}/>
                            </DropdownToggle>
                            <DropdownMenu className="dropMenu">
                                <DropdownItem className="dropItem"><Link to="/enterprise1">"Госгеолинформанцент" давлат корхонасининг мақсад ва вазифалари</Link></DropdownItem>
                                <DropdownItem className="dropItem"><Link to="/staff">Ходимлар</Link></DropdownItem>
                                <DropdownItem className="dropItem"><Link to="/">Асосий тугалланган лойиҳалар</Link></DropdownItem>
                                <DropdownItem className="dropItem"><Link to="/">Саноат кўрсатмалар ва қоидалар</Link></DropdownItem>
                                <DropdownItem className="dropItem"><Link to="/">Вазирлар махкамасининг 546 сонли карорм</Link></DropdownItem>
                                <DropdownItem className="dropItem"><Link to="/youthunion">Корхона Ёшлар Иттифоқи</Link></DropdownItem>
                                <DropdownItem className="dropItem"><Link to="/">Касаба уюшмаси</Link></DropdownItem>
                                <DropdownItem className="dropItem"><Link to="/">Контакт</Link></DropdownItem>


                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={dropdownOpen2} toggle={toggle2} className="drop">
                            <DropdownToggle className="dropToogle">
                                Интерактив хизмат
                                <img className="dropImg" src={dropdownOpen2===true ? "./images/arrow-up-icon-436.png" : "./images/Path.png"}/>
                            </DropdownToggle>
                            <DropdownMenu className="dropMenu">
                                <DropdownItem className="dropItem"><Link to="/admin">Геологик ҳисоботларнинг тезислари</Link></DropdownItem>
                                <DropdownItem className="dropItem"><Link to="/admin">Кадастр объэктларининг паспортлари</Link></DropdownItem>
                                <DropdownItem className="dropItem"><Link to="/admin">Геологик маълумотлар тўпламини тақдим этиш</Link></DropdownItem>
                                <DropdownItem className="dropItem"><Link to="/admin">Фойдали қазилмалар захиралари ҳаракати тўғрисида ҳисоботларни қабул қилиш (5-ГР шакли)</Link></DropdownItem>
                                <DropdownItem className="dropItem"><Link to="/admin">Фойдали қазилмалар захиралари ҳаракати тўғрисида ҳисобот олиш учун масъул мутахассисларнинг алоқалари (5-ГР шакли)</Link></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Link to="/">Корхона хариди</Link>
                    </div>
                    <div className="navbarNavRight d-flex align-items-center">
                        <img src="./images/fi_map-pin.png" className="icons"></img>
                          <span>Интерактив харита</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderUpper;