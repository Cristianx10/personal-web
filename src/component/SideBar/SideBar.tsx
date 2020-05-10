import React, { useEffect } from "react";

import "./SideBar.scss";

const SideBar = () => {

    useEffect(() => {

        const W = window as any;
        var elems = document.querySelectorAll('.sidenav');
        var instances = W.M.Sidenav.init(elems, {});

    }, [])
    return <div className="SideBar">

        <ul id="slide-out" className="sidenav">
            <li><div className="user-view">
                <div className="background">
                    <img src="/img/background/geometria_violeta.png" />
                </div>
                <a href="#user"><img className="circle" src="/img/persons/foto1.jpg" /></a>
                <a href="#name"><span className="white-text name">Cristian Salguero</span></a>
                <a href="#email"><span className="white-text email">david_salinasx10@hotmail.com</span></a>
            </div></li>
        
            <li><a href="#!"><i className="material-icons">cloud</i>Proyecto 1</a></li>
            <li><a href="#!"><i className="material-icons">cloud</i>Proyecto 2</a></li>
            <li><a href="#!"><i className="material-icons">cloud</i>Proyecto 3</a></li>
            <li><a href="#!"><i className="material-icons">cloud</i>Proyecto 4</a></li>
            <li><a href="#!"><i className="material-icons">cloud</i>Proyecto 5</a></li>
            <li><a href="#!"><i className="material-icons">cloud</i>Proyecto 6</a></li>
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons medium center">menu</i></a>
    </div>
}

export default SideBar;