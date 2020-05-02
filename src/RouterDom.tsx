import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./pages/App/App";

const RouterDom = () => {
    return (<>
        <BrowserRouter>
            <Switch>
                <Route path="/"><App /></Route>
            </Switch>
        </BrowserRouter>
    </>)
}


export default RouterDom;