import React from "react";
import "./Card.scss";

export interface ICard {
    title: string;
    url: string;
    background: string;
    onClick: Function;
}

const Card = (props: ICard) => {


    return (<div className="CCard">

        <div className="row"
            onClick={() => {
                props.onClick(props);
            }}>
            <div className="col">
                <div className="card">
                    <div className="card-image">
                        <img src={props.background} />
                        <span className="card-title">{props.title}</span>
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <a href={props.url}>This is a link</a>
                    </div>
                </div>
            </div>
        </div>



    </div >);
}

export default Card;