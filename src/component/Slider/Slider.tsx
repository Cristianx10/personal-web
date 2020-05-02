import React, { useEffect } from "react";
import "./Slider.scss";



const Slider = () => {

    useEffect(() => {

        const propsWindows = window as any;
        const M = propsWindows.M;
        var elems = document.querySelectorAll('.slider');

        var options = {
            interval: 3000,
            height: 700
        }

        var instances = M.Slider.init(elems, options);

        console.log(instances)
    }, [])
    return <div className="CSlider">
        <div className="slider">
            <ul className="slides">
                <li>
                    <img src="/img/background/programacion.png" />
                    <div className="caption center-align">
                        <h3>Maquetación Web</h3>
                        <div className="slider-1">
                            <section>
                                <h2>HTML</h2>
                                <div className="size1" style={{ backgroundImage: `url("/img/icons/html.png")` }} />
                            </section>

                            <section>
                                <h2>JS</h2>
                                <div className="size2" style={{ backgroundImage: `url("/img/icons/js.png")` }} />
                            </section>
                            <section>
                                <h2>CSS</h2>
                                <div className="size2" style={{ backgroundImage: `url("/img/icons/js.png")` }} />
                            </section>
                        </div>
                        <h5 className="light grey-text text-lighten-3">Programación Orientada a objetos</h5>
                    </div>
                </li>
                <li>
                    <img src="/img/background/geometria.png" />
                    <div className="caption right-align">
                        <h3>Manejo de Componentes</h3>
                        <h1>REACT</h1>
                        <div className="size2" style={{ backgroundImage: `url("/img/icons/react.png")` }} />
                        <h5 className="light grey-text text-lighten-3">"El todo es mas que la suma de sus partes"</h5>
                    </div>
                </li>
                <li>
                    <img src="/img/background/eye.jpg" />
                    <div className="caption left-align">
                        <h3>Más allá de lo que ves</h3>
                        <h5 className="light grey-text text-lighten-3"></h5>
                    </div>
                </li>
                <li>
                    <img src="/img/background/contact.jpg" />
                    <div className="caption center-align">
                        <h3>Generando experiencias</h3>
                        <h5 className="light grey-text text-lighten-3"></h5>
                    </div>
                </li>
            </ul>
        </div>

    </div>

}

export default Slider;