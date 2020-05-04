import React, { ReactChild } from "react";
import "./App.scss";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Body from '../../component/Body/Body';

interface IApp {
    children: ReactChild[] | ReactChild;
}


const App = (props: IApp) => {
    return <div className="App">
        <Header />
        <Body children={props.children}></Body>
        <Footer />
    </div>
}

export default App;