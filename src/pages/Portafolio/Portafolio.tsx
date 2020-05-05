import React, { useState, useEffect } from "react";
import Card from "../../component/Card/Card";
import { ICard } from '../../component/Card/Card';
import Preview from "../../component/Preview/Preview";

import "./Portafolio.scss";

interface IPortafolio {

}

const Portafolio = (props: IPortafolio) => {

    const [url, setUrl] = useState("");

    useEffect(() => {
        window.onbeforeunload = function (e: any) {
            e.prevent()
            console.log("hola");
        };
    });


    return (<div className="Portafolio">
        {url != "" ?
            <Preview url={url} />
            :
            <div className="proyectos">

                <Card
                    onClick={(e: ICard) => {
                        setUrl(e.url);
                    }}
                    title="Marca personal"
                    url="https://www.behance.net/gallery/96505503/Marca-personal"
                    background="/img/portafolio/preview/marca1.png"
                />
                <Card
                    onClick={(e: ICard) => {
                        setUrl(e.url);
                    }}
                    title="Pizza Proyect"
                    url="https://www.behance.net/gallery/71043941/Pizza-Proyect"
                    background="/img/portafolio/preview/pizza.png"
                />
                <Card
                    onClick={(e: ICard) => {
                        setUrl(e.url);
                    }}
                    title="Cannion"
                    url="https://www.behance.net/gallery/76121035/CANNIO"
                    background="/img/portafolio/preview/cannion.png"
                />
                <Card
                    onClick={(e: ICard) => {
                        setUrl(e.url);
                    }}
                    title="Lumen"
                    url="https://www.behance.net/gallery/88879877/Lumen"
                    background="/img/portafolio/preview/lumen.png"
                />
                <Card
                    onClick={(e: ICard) => {
                        setUrl(e.url);
                    }}
                    title="Skyline Design"
                    url="https://www.behance.net/gallery/58648973/Skyline-Design"
                    background="/img/portafolio/preview/skyline.png"
                />
                <Card
                    onClick={(e: ICard) => {
                        setUrl(e.url);
                    }}
                    title="PrimeVideo"
                    url="https://www.behance.net/gallery/66274949/Prime-Video-Redesign"
                    background="/img/portafolio/preview/primeVideo.png"
                />
            </div>
        }
        {/**
 * 
 * 
 * 
 */}

    </div>);
}

export default Portafolio;

const pageNumber = {

}