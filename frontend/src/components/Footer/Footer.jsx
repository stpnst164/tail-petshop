import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__phone">
                            <div className="footer__phone__icon">
                                <img
                                    src={assets.footer_phone_icon}
                                    alt="Footer phone icon"
                                />
                            </div>
                            <div className="footer__phone__info">
                                <p>88-88-88</p>
                            </div>
                        </div>
                        <div
                            className="footer__phone
                        footer__mail">
                            <div
                                className="footer__phone__icon
                            footer__mail__icon">
                                <img
                                    src={assets.footer_mail_icon}
                                    alt="Footer mail icon"
                                />
                            </div>
                            <div
                                className="footer__phone__info
                            footer__mail__icon">
                                <p>tail@gmail.com</p>
                            </div>
                        </div>
                        <div className="footer__socials">
                            <div className="footer__socials__tg">
                                <a href="#">
                                    <img
                                        src={assets.footer_tg_icon}
                                        alt="Footer tg icon"
                                    />
                                </a>
                            </div>
                            <div className="footer__socials__inst">
                                <a href="#">
                                    <img
                                        src={assets.footer_inst_icon}
                                        alt="Footer inst icon"
                                    />
                                </a>
                            </div>
                            <div className="footer__socials__vk">
                                <a href="#">
                                    <img
                                        src={assets.footer_vk_icon}
                                        alt="Footer vk icon"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
