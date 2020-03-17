import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import 'semantic-ui-less/semantic.less';
import NavBar from "./components/NavBar/NavBar";


const Home = React.lazy(() => import( "./pages/Home"));
const Projects = React.lazy(() => import("./pages/Projects"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));

// todo : need logo
// todo : new humburger icon
// todo : animation for hero title massage
// todo : use animation   and  show rendered component with ease
// todo : animation on navBar header words
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
                    <Route exact path="/projects" component={Projects}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
