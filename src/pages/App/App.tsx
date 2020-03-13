import React from "react";
import "./App.scss";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Body from '../../component/Body/Body';



const App = () => {
    return <div className="App">
        <Header />
        <Body />
        <Footer />
    </div>
}

export default App;