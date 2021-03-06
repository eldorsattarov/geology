import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {colorState} from "../redux/actions/colorAction";
import {connect} from "react-redux";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem2 } from 'reactstrap';

const HeaderUpper = (props) => {
    const{t} = useTranslation();

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

    // Drawer page

    return (
        <div className="navbarNav mb-1">
            <div className="">
                <div className="container">
                    <div className="row d-flex justify-content-end align-items-center">

                      <div className="d-flex justify-content-between w-100">

                          <div className="navbarNavLeft">
                              <div className={`korxona ${openLink === true ? 'active' : ""}`}>
                                  <a href="#" onClick={() => linkOpen()} className="aLink">{t("navbar.korxonaXaqida")}</a>
                                  <div className={`korxonaLink`}>
                                  {/*<div className={openLink === false ? "korxonaLink d-none" : "korxonaLink"}>*/}
                                      <div className="container">
                                          <div className="row" >
                                              <div className="col-12 links d-flex justify-content-between align-items-center">
                                                  <Link className="tabLink" to="/enterprise1">{t("korxonaXaqida.xaqida1")}</Link>
                                                  <a href="#"><img src="./images/fi_x2.png" onClick={()=>setOpenLink(!openLink)}/></a>
                                              </div>
                                              <div className="col-12 links"><Link className="tabLink" to="/staff">{t("korxonaXaqida.xaqida2")}</Link></div>
                                              {/*<div className="col-12 links"><Link className="tabLink" to="/enterprise2">???????????? ?????????????????????? ??????????????????</Link></div>*/}
                                              {/*<div className="col-12 links"><Link className="tabLink" to="/enterprise2">???????????? ?????????????????????? ???? ????????????????</Link></div>*/}
                                              <div className="col-12 links"><Link className="tabLink" to="/laws">{t("korxonaXaqida.xaqida3")}</Link></div>
                                              <div className="col-12 links"><Link className="tabLink" to="/youthunion">{t("korxonaXaqida.xaqida4")}</Link>
                                              </div>
                                              {/*<div className="col-12 links"><Link className="tabLink" to="/">???????????? ??????????????</Link></div>*/}
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className={`korxona2 ${openLink2 === true ? 'active2' : ""}`}>
                                  <a href="#" onClick={() => linkOpen2()} className="aLink">{t("navbar.interaktivXizmat")}</a>
                                  <div className={`korxonaLink2`}>
                                      <div className="container">
                                          <div className="row">
                                              {/*<div className="col-12 links d-flex justify-content-between align-items-center">*/}
                                              {/*<Link to="/" className="tabLink">???????????????? ???????????????????????????? ??????????????????</Link>*/}
                                              <div className="col-12 links d-flex justify-content-between align-items-center">
                                                  <Link to="/reports" className="tabLink">
                                                      {t("interaktivXizmat.interaktiv1")}</Link>
                                                  <a href="#"><img src="./images/fi_x2.png" onClick={()=>setOpenLink2(!openLink2)}/></a>

                                              </div>

                                              {/*</div>*/}
                                              {/*<div className="col-12 links"><Link to="/cadastre">?????????????? ???????????????????????????? ??????????????????????</Link></div>*/}
                                              {/*<div className="col-12 links"><Link to="/">???????????????? ?????????????????????? ?????????????????? ???????????? ????????</Link></div>*/}
                                              <div className="col-12 links"><Link to="/specialists" className="tabLink">{t("interaktivXizmat.interaktiv2")}</Link></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              {/*<a href="https://exarid.uzex.uz" target="_blank" className="aLink">???????????????????? ????????????????</a>*/}
                              <Link to="/financial" className="aLink">{t("navbar.moliyaviyXisobot")}</Link>

                              <Link to="/communication" className="aLink">{t("navbar.aloqa")}</Link>
                          </div>

                          <div className="navbarNavRight d-flex align-items-center">
                              <img src="./images/fi_map-pin.png" className="icons"></img>
                              <a href="http://map.uzgeolcom.uz/" target="_blank" className="aLink">{t("navbar.ineraktivXarita")}</a>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return{
        changeColor: state.changeColor.changeColor
    }
}
export default connect(mapStateToProps,{colorState})(HeaderUpper);
