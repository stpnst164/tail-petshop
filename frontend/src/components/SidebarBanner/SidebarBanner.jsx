import React from 'react';
import './SidebarBanner.css';
import Sidebar from '../Sidebar/Sidebar';
import Banner from '../Banner/Banner';

const SidebarBanner = () => {
    return (
        <>
            <div className="sidebar-banner">
                <div className="container">
                    <div className="sidebar-banner__wrapper">
                        <Sidebar />
                        <Banner />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarBanner;
