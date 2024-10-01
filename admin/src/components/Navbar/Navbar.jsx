import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="navbar__wrapper">
                        <div className="navbar__logo">
                            <a href="#">
                                <img
                                    src={assets.admin_logo}
                                    width="200px"
                                    height="100px"
                                    alt="Navbar logo"
                                />
                            </a>
                        </div>
                        <div className="navbar__profile">
                            <a href="#">
                                <img
                                    src={assets.profile_icon}
                                    width="50px"
                                    height="50px"
                                    alt="Profile icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
