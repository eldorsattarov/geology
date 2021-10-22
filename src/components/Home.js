import React from 'react';
import Header from "./Header";
import HomePageSecion1 from "./HomePageSecion1";
import HomePageSection2 from "./HomePageSection2";
import Footer from "./Footer";
import HomePageSection3 from "./HomePageSection3";

const Home = () => {
    return (
        <div>
            <Header/>
            <HomePageSecion1/>
            <HomePageSection2/>
            <HomePageSection3/>
            <Footer/>
        </div>
    );
};

export default Home;