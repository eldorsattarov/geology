import React, {useEffect, useState} from 'react';
import HeaderUpper from "./HeaderUpper";
import {AvForm, AvField} from "availity-reactstrap-validation";
import {Link} from "react-router-dom";
import {wrapMapToPropsConstant} from "react-redux/lib/connect/wrapMapToProps";
import {useTranslation} from "react-i18next";
import {LANGUAGE} from "../tools/constants";
import {colorState} from "../redux/actions/colorAction";
import {connect} from "react-redux";

const Header = (props) => {
const {t , i18n} = useTranslation();
    function handleChange(event) {
        event.preventDefault();
        localStorage.setItem(LANGUAGE, event.target.value);
        document.location.reload(true);
    }

    let changeLang = localStorage.getItem(LANGUAGE);

    function handleClick() {
        i18n.changeLanguage(changeLang);
    }
    useEffect(()=>{
        handleClick();
    },[])
///////////////////////////////
    const [open, setOpen] = useState(false);
    const [clear , setClear] = useState('')

    const openInput = () => {
        setOpen(!open);
        if (open===false) setClear("")
    }
    const clearInput = (e) => {
      open===false ? setClear("") : setClear(e.target.value);
      console.log(clear)
    }

const [chandeColor , setchandeColor] = useState(false);
    const changeColor = () =>{
        props.colorState({changeColor : !props.changeColor});
    }
    return (
        <div className="navbarTop">
            <div className="container">
                <div className="row">
                    <div className="navbar1 d-flex justify-content-between align-items-center mt-1 w-100">

                        <div className={`d-flex align-items-center imgFrom ${open === false ? "dNone3" : ""}`}>
                            <img src="./images/fi_search2.png" className={`${open === false ? "dNone2" : ""}`}/>
                            <AvForm className={`avform ${open === false ? "dNone2" : ""}`}>
                                <AvField type="text" name="search" className="avform2" placeholder={t("izlash.izlash")}
                                         value={clear}
                                         onChange={e => clearInput(e)}
                                />
                            </AvForm>
                        </div>

                        <Link to="/" className="text-decoration-none">
                            <div className="navbarTopLeft d-flex align-items-center">
                                <img src="./images/logoN1.png" className="logo"/>
                                <span className={`logoText ${open === true ? "dNone2" : ""}`}>{t("navbar.logoText")}</span>
                            </div>
                        </Link>
                        <div className="navbarTopRight d-flex align-items-center">

                            {/*/////////////////*/}


                            <img src={`${open === false ? "./images/fi_search.png" : "./images/fi_x2.png"}`}
                                 className="icons" onClick={() => openInput()}/>
                            {/*<img src="./images/fi_eye.png" className="icons changeColorIcon"/>*/}
                            <img src="./images/fi_eye.png" className="icons changeColorIcon" onClick={()=>changeColor()}/>
                            <Link to="/loginEtp" className="text-decoration-none">
                            {/*<Link to="/tadbirkor/korxonaHaqida" className="text-decoration-none">*/}
                                <span className="eri">{t("navbar.eri")}</span>
                            </Link>

                            <div className="d-flex align-items-center languageSelect">
                                <img src="./images/fi_globe2.png"/>
                                <select  onChange={handleChange}
                                         defaultValue={changeLang}>
                                    <option value="uz">??????????????</option>
                                    <option value="ru">??????????????</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderUpper/>
        </div>
    );
};
const mapStateToProps = (state) =>{
    return{
        changeColor: state.changeColor.changeColor
    }
}
export default connect(mapStateToProps,{colorState})(Header);
