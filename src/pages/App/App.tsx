import React, { ReactChild, useEffect } from "react";
import "./App.scss";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Body from '../../component/Body/Body';
import SideBar from '../../component/SideBar/SideBar';


interface IApp {
    children: ReactChild[] | ReactChild;
}


const App = (props: IApp) => {

    return <div className="App">
        <Header />
        <SideBar />
        <Body children={props.children}></Body>
        <Footer />
    </div>
}

export default App;