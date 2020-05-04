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
                        <p></p>
                    </div>
                    <div className="card-action">
                        <a href={props.url}>Entrar</a>
                    </div>
                </div>
            </div>
        </div>



    </div >);
}

export default Card;