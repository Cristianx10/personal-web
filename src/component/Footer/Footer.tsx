import React from "react";

import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__container">
                <div className="seccion">
                    <img src="/img/logo.svg" alt="" width="100" />
                    <p>Container</p>
                </div>
                <div className="seccion">

                </div>
                <div className="seccion">

                </div>

            </div>
            <div className="Footer__derechos">
                <p>Todos los derechos reservados</p>
            </div>
        </footer>
    );
}

export default Footer;