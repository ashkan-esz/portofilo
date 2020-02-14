import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-offline/semantic.min.css'; //use offline version of google fonts
import NavBarTitle from "./components/NavBar/NavBarTitle";

const Home = React.lazy(() => import( "./pages/Home"));
const Rezome = React.lazy(() => import("./pages/Rezome"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
const NavBar = React.lazy(() => import("./components/NavBar/NavBar"));

function App() {
    return (
        <div>
            <Suspense fallback={<NavBarTitle/>}>
                <NavBar/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/rezome" component={Rezome}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
