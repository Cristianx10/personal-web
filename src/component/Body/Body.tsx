import React, { ReactChild, useEffect } from "react";
import "./Body.scss";

interface IBody {
    children: ReactChild[] | ReactChild;
}

const Body = (props: IBody) => {


    return (<div id="inicio" className="Body slidein scrollspy">
        {Array.isArray(props.children) ? props.children.map((child) => {
            return child;
        }) : props.children}
    </div>);

}

export default Body;