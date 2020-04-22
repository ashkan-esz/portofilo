import React from 'react';
import {Header} from "semantic-ui-react";
import Titles from "./Titles";
import TalentsList from "./TalentsList";
import './About.css';

const About = () => {
    return (
        <div className={'about'}>

            <Header
                className={'about-header'}
                as="h1"
                textAlign={"center"}
                color="black">
                <Header.Content>ABOUT</Header.Content>
                <hr/>
            </Header>
            <Titles/>
            <TalentsList/>
        </div>
    );
};

export default About;