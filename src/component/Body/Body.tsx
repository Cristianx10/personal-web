import React, { ReactChild } from "react";
import "./Body.scss";

interface IBody {
    children: ReactChild[] | ReactChild;
}

const Body = (props: IBody) => {

    return (<div className="Body slidein">
        {Array.isArray(props.children) ? props.children.map((child) => {
            return child;
        }) : props.children}
    </div>);

}

export default Body;