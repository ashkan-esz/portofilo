import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import 'semantic-ui-offline/semantic.min.css'
import NavBarTitle from './components/NavBar/NavBarTitle';

const NavBar = React.lazy(() => import("./components/NavBar/NavBar"));
const Home = React.lazy(() => import( "./pages/Home"));
const Rezome = React.lazy(() => import("./pages/Rezome"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));

// todo : try to comment font import in css file to see it still get the fonts or not // looks cant do it!!
// todo : why it takes more time to load on mobiles
// todo : navbar in mobile mode should change
// todo : navbar in tablet mode should be handle
// todo : error boundaries
// todo : show some thing while page is loading
// todo : use route based splitting to increase performance

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
