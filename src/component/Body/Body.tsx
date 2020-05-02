import React from "react";
import Slider from "../Slider/Slider";
import "./Body.scss";
import Card from '../Card/Card';

const Body = () => {

    return (<div className="Body">
        <Slider />

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


    </div>);

}

export default Body;