import React from 'react';
import TopImage from "../components/TopImage";

const Home = props => {
    return (
        <div>
            <TopImage image={require("../images/1.jpeg")}/>
            hello from home page
        </div>
    );
};


export default Home;