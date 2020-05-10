import React, { useEffect } from "react";
import "./Header.scss"


const Header = () => {


    return (
        <div className="Header">
            <div className="Header__logo__container">
                <a href="/">
                    <div className="Header__logo__information">
                        <img src="/img/icons/name.png" alt=""/>
                    </div>
                    <div className="Header__logo">
                        <div className="Header__logo__fondo">
                            <img className="Header__logo__fondo__img anim_img" src="/img/logo.svg" alt="" />
                        </div>
                    </div>
                </a>
            </div>
            <nav className="Header__navegation">
                <ul className="Header__navegation__list">
                    <li className="Header__navegation__list__item"><a href="/">
                        <i className="large material-icons left">home</i>
                        <span>HOME</span>
                    </a></li>
                    <li className="Header__navegation__list__item"><a href="/portafolio">
                        <i className="large material-icons left">work</i>
                        <span>PORTAFOLIO</span>
                    </a></li>
                    <li className="Header__navegation__list__item"><a href="#contacto" id="btn_contacto">
                        <i className="large material-icons left">call</i>
                        <span>CONTACTO</span>
                    </a></li>
                    <li className="Header__navegation__list__item none"><a href="#inicio" id="btn_inicio">INICIO</a></li>

                </ul>
            </nav>
        </div >
    );
}

export default Header;