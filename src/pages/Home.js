import React from 'react';
import About from "../components/About/About";
import ProjectsList from "../components/Projects/ProjectsList";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <About/>
            <ProjectsList/>
            <Footer/>
        </React.Fragment>
    );
};

export default Home;