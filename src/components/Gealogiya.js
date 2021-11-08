import React from 'react';
import Header from "./Header";
import HeaderUpper from "./HeaderUpper";
import HomePageSection3 from "./HomePageSection3";
import Footer from "./Footer";
import HomePageSection2 from "./HomePageSection2";
import HomePageSection4 from "./HomePageSection4";
import HomePageSecion1 from "./HomePageSecion1";
import HomePageSection5 from "./HomePageSection5";
import {Link} from "react-router-dom";

const Gealogiya = () => {
    return (
        <div>
            <Header/>
            {/*<HomePageSecion1/>*/}
            <Link to="/carouselPageOne" className="text-dark"><HomePageSection3/></Link>
            <HomePageSection4/>
            <HomePageSection2/>
            <HomePageSection5/>
            <Footer/>
        </div>
    );
};

export default Gealogiya;
