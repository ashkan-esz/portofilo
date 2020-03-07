import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import 'semantic-ui-less/semantic.less';
import NavBar from "./components/NavBar/NavBar";

const Home = React.lazy(() => import( "./pages/Home"));
const Rezome = React.lazy(() => import("./pages/Rezome"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));

// todo : animation on navbar header words
// todo : compress images again
// todo : image optimazing
// todo : error boundaries
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
