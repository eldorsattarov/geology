import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

const Cadastre = () => {
    return (
        <div>
            <Header/>

            <div className="container my-5">
               <div className="row">
                   <p className="main_text">
                       Кадастр объэктларининг паспортлари
                   </p>
                   <p className="qaror_text">
                       Ўзбекистон Республикаси Президентининг «Давлат хизматлари кўрсатиш миллий тизимини жадал ривожлантириш бўйича қўшимча чора-тадбирлар тўғрисида»
                       2020 йил 31 январдаги ПФ-5930-сон Фармонига мувофиқ кадастр соҳасида давлат хизматлари кўрсатиш тизимини янада такомиллаштириш мақсадида
                       Вазирлар Маҳкамаси қарор қилади:
                   </p>
                   <p className="cadastr_text">
                       Кўчмас мулк объектига кадастр паспортини бериш бўйича  давлат <br/> хизматлари кўрсатишнинг  02.09.2020 йилдаги 535 -сон
                   </p>

                   <div className="col-12 pl-0 mt-4">
                       <a style={{textDecoration: "solid"}} href="#" className="codastreLink">Юклаб олиш</a>
                   </div>
               </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Cadastre;