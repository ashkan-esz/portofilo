import React from 'react';
import {Header} from "semantic-ui-react";
import Titles from "./Titles";
import TalentsList from "./TalentsList";


const About = () => {
    return (
        <div style={{
            // backgroundColor:'#e4fffc',
            borderTop: '3px solid teal'}}>

            <Header
                style={{paddingTop: '2em',fontSize:'2.5em'}}
                as="h1"
                textAlign={"center"}
                color="black">
                <Header.Content>ABOUT</Header.Content>
                <hr style={{textAlign:'center',width:'2em',border: '3px solid black'}}/>
            </Header>

            <Titles/>
            <TalentsList/>


        </div>
    );
};

export default About;