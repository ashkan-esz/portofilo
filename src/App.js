import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Rezome from "./pages/Rezome";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/rezome" component={Rezome}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    );
}

export default App;
