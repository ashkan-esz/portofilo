import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import 'semantic-ui-less/semantic.less';
import NavBar from "./components/NavBar/NavBar";

const Home = React.lazy(() => import( "./pages/Home"));
const Rezome = React.lazy(() => import("./pages/Rezome"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));

// todo : remove default fonts too
// todo : image optimazing
// todo : side menu in mobile version
// todo : hero image shouldn't be navbars background
// todo : smaller imgages for mobile version
// todo : why it takes more time to load on mobiles
// todo : navbar in mobile mode should change
// todo : navbar in tablet mode should be handle
// todo : error boundaries
// todo : show some thing while page is loading
// todo : use route based splitting to increase performance
// todo : turn on service worker
// todo: seo !!!

function App() {
    return (
        <div>

            <NavBar/>

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
