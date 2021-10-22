import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
     <div className="col-4 text-center">
         <img src="./images/Ellipse 2 (1).png" className="footerLogo"/><br/>
         <a className="footerLink">
             Геология ахборот маркази <br/>
Давлат корхонаси
         </a>
     </div>
     <div className="col-3">
         <a href="#" className="footerMenu">Меню</a>
        <div className="footerDiv"> <a href="#" className="footerLink">Корхона ҳақида</a>
        </div>
         <div className="footerDiv"><a href="#" className="footerLink">Норматив асос</a></div>
         <div className="footerDiv"><a href="#" className="footerLink">Интерактив хизмат</a></div>
         <div className="footerDiv"><a href="#" className="footerLink">Давлат хизматлари</a></div>
     </div>
     <div className="col-5">
         <a href="#" className="footerMenu">Контактлар</a>
         <div className="d-flex justify-content-between">
                 <div className="footerDiv">
                     <a href="#" className="footerLink2">Телефон рақами</a><br/>
                     <a href="#" className="footerLink">+998 90 627-48-59</a>
                 </div>
             <div className="footerDiv">
                 <a href="#" className="footerLink2">Факс рақами</a><br/>
                 <a href="#" className="footerLink">+998 71 256-86-58</a>
             </div>
             <div className="footerDiv">
                 <a href="#" className="footerLink2">Иш тартиби:</a><br/>
                 <a href="#" className="footerLink">08:00-18:00</a>
             </div>
         </div>
         <div className="footerDiv">
             <a href="#" className="footerLink">Ижтимоий тармоқлар</a>
         </div>
         <div className="mesenger">
             <a href="#"><img src="./images/facebook.png"/></a>
             <a href="#"><img src="./images/telegram.png"/></a>
             <a href="#"><img src="./images/youtube.png"/></a>
         </div>
     </div>
                    <div className="footerLine">

                    </div>
                    <div className="w-100 d-flex justify-content-between align-items-center mt-3">
                        <span className="text-secondary">
                            © 2019 Ўзбекистон Республикаси Давлат геология ва минерал<br/>ресурслар қўмитаси
                        </span>
                       <div className="text-secondary d-flex">
                           <span className="mr-2">Сайт ишлаб чиқилди:</span>
                           <a href="#" className="mt-1"><img src="./images/Слой 1.png"/></a>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;