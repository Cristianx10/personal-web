import React from "react";
import "./Header.scss"

const Header = () => {

    return (
        <div className="Header">
            <nav className="Header__navegation">
                <ul className="Header__navegation__list">
                    <li className="Header__navegation__list__item"><a>Inicio</a></li>
                    <li className="Header__navegation__list__item"><a href="/portafolio">Portafolio</a></li>
                    <li className="Header__navegation__list__item"><a>Caracteristicas</a></li>
                    <li className="Header__navegation__list__item"><a>Contacto</a></li>
                </ul>
            </nav>
            <div className="Header__logo">
                <img className="Header__logo__img" src="/img/logo.svg" alt="" />
            </div>
        </div>
    );
}

export default Header;