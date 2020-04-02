import React from 'react';
import About from "../components/About/About";
import ProjectsList from "../components/Projects/ProjectsList";

const Home = () => {
    return (
        <React.Fragment>
            <About/>
            <ProjectsList/>
        </React.Fragment>
    );
};

export default Home;