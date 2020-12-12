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
        <a href={props.url}>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-image"
                            onClick={() => {
                                props.onClick(props);
                            }}>
                            <img src={props.background} />
                            <span className="card-title">{props.title}</span>
                        </div>
                        <div className="card-content">
                            <p></p>
                        </div>
                        <div className="card-action">
                            <a target="_blank" href={props.url}>Entrar</a>
                        </div>
                    </div>
                </div>

            </div>   </a>



    </div >);
}

export default Card;