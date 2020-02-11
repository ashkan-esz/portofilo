import React from 'react';
import {Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Rezome from "./pages/Rezome";
import PageNotFound from "./pages/PageNotFound";
import 'bootstrap/dist/css/bootstrap.min.css'; // style for react bootstrap

function App() {
    return (
        <div>
            <NavBar color="#071538"/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/rezome" component={Rezome}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
}

export default App;
