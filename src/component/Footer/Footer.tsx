import React, { useEffect } from "react";

import "./Footer.scss"

const Footer = () => {

    return (
        <footer className="Footer">
            <div className="Footer__container">
                <div className="seccion">
                    <img src="/img/logo.svg" alt="" width="100" />

                </div>
                <div className="seccion seccion__items white-text right-align center">
                    <h3>Contacto:</h3>
                    <section className="seccion__items__item">
                        <div className="seccion__items__item__icon ">
                            <i className="material-icons">email</i>
                            <h5>Correo:</h5>
                        </div>

                        <p>david_salinasx10@hotmail.com</p>
                    </section>
                    <section>
                        <div className="seccion__items__item__icon ">
                            <img src="/img/icons/git.png" alt="github" />
                            <h5>GitHub:</h5>
                        </div>
                        <p><a href="https://github.com/cristianx10">   https://github.com/cristianx10</a></p>
                    </section>
                    <section>
                        <div className="seccion__items__item__icon ">
                            <img src="/img/icons/behance.png" alt="" />
                            <h5>Behance:</h5>
                        </div>
                        <p><a href="https://www.behance.net/cristiansal">https://www.behance.net/cristiansal</a></p>
                    </section>


                </div>


            </div>
            <div className="Footer__derechos">
                <p>Todos los derechos reservados</p>
            </div>
        </footer>
    );
}

export default Footer;