import React from "react";
import Slider from "../../component/Slider/Slider";

import "./index.scss";

const Index = () => {

    return <div>
        <Slider />

        <div className="about">
            <div className="about__container">
                <img className="icon circle" src="/img/persons/foto1.jpg" alt="" />
                <div className="descripcion">
                    <p >Soy Cristian David Salguero, Diseñador de Medios Interactivos, con habilidades creativas para la resolución de problemas. Tengo experiencia en diseño multimedia, y maquetación web con conocimientos de Lenguajes de programación, como HTML, CSS, Java. Poseo grandes habilidades para análisis, orientado al logro.</p>
                </div>
            </div>
        </div>


        {/**
* 
* 
<div className="Card">
    <div className="Card__container">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>
    </div>
    <div></div>
</div>

<div className="Body__services">
    <Card />
    <Card />
    <Card />

</div>
* 
* 
*/}
    </div>

}

export default Index;