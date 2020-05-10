import React, { ReactChild, useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Body from '../../component/Body/Body';
import SideBar from '../../component/SideBar/SideBar';
import ScrollManager from './TS_Scroll';
import { initScroll } from './TS_Scroll';

import "./App.scss";

interface IApp {
    children: ReactChild[] | ReactChild;
}


const App = (props: IApp) => {


    var [scroll] = useState(!initScroll ? new ScrollManager() : undefined);


    useEffect(() => {
        if (scroll != undefined) {
            scroll.loadComponent();
        }

        var elems = document.querySelectorAll('.scrollspy');
        var instances = M.ScrollSpy.init(elems, {
            scrollOffset: -400,
            throttle: 10
        });
    }, []);



    return (
        <>
            <div className="App">
                <div className="App__container">
                    <Header />
                    <SideBar />
                    <Body children={props.children}></Body>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;