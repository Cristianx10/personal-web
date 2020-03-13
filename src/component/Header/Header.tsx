import React from "react";
import "./Header.scss"

const Header = () => {

    return (
        <div className="Header">
            <nav className="Header__navegation">
                <ul className="Header__navegation__list">
                    <li className="Header__navegation__list__item">Inicio</li>
                    <li className="Header__navegation__list__item">Portafolio</li>
                    <li className="Header__navegation__list__item">Caracteristicas</li>
                    <li className="Header__navegation__list__item">Contacto</li>
                </ul>
            </nav>
            <div className="Header__logo">
                <img className="Header__logo__img" src="/img/logo.svg" alt="" />
            </div>
        </div>
    );
}

export default Header;