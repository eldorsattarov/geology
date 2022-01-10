import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../tools/constants";
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation();

    const [footer , setFooter] = useState([]);
    useEffect(()=>{
        axios.get(API_PATH + "Footer/")
            .then((res)=>{
                console.log(res);
                setFooter(res.data.results);
            })
    },[]);

    return (
        <div className="footer">
            <div className="container">
                {footer.map((item,index)=>{
                    return(
                        <div className="row" key={item.id}>
                            <div className="col-4 text-center">
                                <div className="mb-2">
                                    <a href="/">
                                        <img src={item.logo} className="footerLogo"/>
                                    </a>
                                </div>
                                <a href="/" className="footerLink">
                                    {item.title}
                                    {/*Ўзбекистон Республикаси Давлат Геология қўмитаси “Давлат геология ахборот маркази” ДК директори*/}
                                </a>
                            </div>

                            <div className="col-3">
                                <a href="/" className="footerMenu">{t("footer.menu")}</a>
                                <div className="footerDiv"><a href="#" className="footerLink">{t("footer.korxona")}</a>
                                </div>
                                <div className="footerDiv"><a href="#" className="footerLink">{t("footer.normativ")}</a></div>
                                <div className="footerDiv"><a href="#" className="footerLink">{t("footer.interaktiv")}</a></div>
                                <div className="footerDiv"><a href="#" className="footerLink">{t("footer.davlat")}</a></div>
                            </div>
                            <div className="col-5">
                                <a href="#" className="footerMenu">{t("footer.aloqa")}</a>
                                <div className="d-flex justify-content-between">
                                    <div className="footerDiv">
                                        <a href="#" className="footerLink2">{t("footer.telefon")}</a><br/>
                                        <a href="#" className="footerLink">{item.phone}</a>
                                    </div>
                                    <div className="footerDiv">
                                        <a href="#" className="footerLink2">{t("footer.faks")}</a><br/>
                                        <a href="#" className="footerLink">{item.fax}</a>
                                    </div>
                                    <div className="footerDiv">
                                        <a href="#" className="footerLink2">{t("footer.tartib")}</a><br/>
                                        <a href="#" className="footerLink">{item.ish_tartibi}</a>
                                    </div>
                                </div>
                                <div className="footerDiv">
                                    <a href="#" className="footerLink">{t("footer.tarmoq")}</a>
                                </div>
                                <div className="mesenger">
                                    <a href={item.social_media_link1} target="_blank"><img src={item.social_media_1}/></a>
                                    <a href={item.social_media_link2} target="_blank"><img src={item.social_media_2}/></a>
                                    <a href={item.social_media_link3} target="_blank"><img src={item.social_media_3}/></a>
                                </div>
                            </div>
                            <div className="footerLine">

                            </div>
                            <div className="w-100 d-flex justify-content-between align-items-center mt-3 uzbRes">
                        <span className="text-secondary ">
                            {t("footer.text")}
                        </span>
                               <div>
                                   <div className="text-secondary d-flex">
                                       <a href="https://napaautomotive.uz/ru" className="mt-1" target="_blank"><img src="./images/Слой3.png"/></a>
                                   </div>
                                   <div className="mt-1">
                                       <span>Developer </span><a href="https://t.me/developer_ES" target="_blank">Eldor</a>
                                   </div>
                               </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Footer;
