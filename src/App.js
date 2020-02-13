import React from 'react';
import {Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Home from "./pages/Home";
import Rezome from "./pages/Rezome";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/rezome" component={Rezome}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
}

export default App;
