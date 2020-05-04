import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./pages/App/App";
import Index from './pages/index/index';
import Portafolio from "./pages/Portafolio/Portafolio";

const RouterDom = () => {
    return (<>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <App>
                        <Index />
                    </App>
                </Route>
                <Route exact path="/portafolio">
                    <App>
                        <Portafolio />
                    </App>
                </Route>
            </Switch>
        </BrowserRouter>
    </>)
}


export default RouterDom;