import React, { useState } from 'react';
import './Home.css';

import Login from '../../components/Login/Login.jsx';

import Sale from '../../components/Sale/Sale';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import SidebarBanner from '../../components/SidebarBanner/SidebarBanner';
import Promotions from '../../components/Promotions/Promotions';
import PopularCategories from '../../components/PopularCategories/PopularCategories';
import News from '../../components/News/News';
import PopularBrands from '../../components/PopularBrands/PopularBrands';
import Footer from '../../components/Footer/Footer';
import FooterExtra from '../../components/FooterExtra/FooterExtra';

const Home = () => {
    const [login, setLogin] = useState(false);

    return (
        <>
            {login ? <Login setLogin={setLogin} /> : <></>}
            <div className="home">
                <Sale />
                <Header setLogin={setLogin} />
                <Navbar />
                <SidebarBanner />
                <Promotions />
                <PopularCategories />
                <News />
                <PopularBrands />
                <Footer />
                <FooterExtra />
            </div>
        </>
    );
};

export default Home;
