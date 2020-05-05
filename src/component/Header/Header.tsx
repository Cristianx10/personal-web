import React, { useEffect } from "react";
import "./Header.scss"


const Header = () => {

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function () {
            const W = window as any;
            var elems = document.querySelectorAll('.scrollspy');
            var instances = W.M.ScrollSpy.init(elems, {});
        });
    }, [])
    return (
        <div className="Header">

            <div className="Header__logo">
                <img className="Header__logo__img" src="/img/logo.svg" alt="" />
            </div>
            <nav className="Header__navegation">
                <ul className="Header__navegation__list">
                    <li className="Header__navegation__list__item"><a href="/">HOME</a></li>
                    <li className="Header__navegation__list__item"><a href="/portafolio">PORTAFOLIO</a></li>
                    <li className="Header__navegation__list__item"><a href="#contact">CONTACTO</a></li>

                </ul>
            </nav>

        </div>
    );
}

export default Header;