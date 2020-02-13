import React from 'react';
import TopImage from "../components/TopImage";

const Home = () => {
    return (
        <div>
            <TopImage image={require('../images/12.jpeg')} height={40}/>
            <TopImage image={require('../images/12.jpeg')} height={40}/>
            <TopImage image={require('../images/12.jpeg')} height={40}/>
            <TopImage image={require('../images/12.jpeg')} height={40}/>
        </div>
    );
};


export default Home;