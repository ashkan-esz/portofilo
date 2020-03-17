import React from 'react';
import {Container, Header} from "semantic-ui-react";

const HeroTitle = ({mobile}) => {
    return (
            <Container text>
                <Header
                    as='h2'
                    // todo : need to change
                    // todo : maybe change with a card
                    // content="i need you like i've never needed anyone before"
                    inverted
                    style={{
                        fontWeight: 'normal',
                        fontSize: mobile ? '2em' : '3.8em',
                        paddingTop: mobile ? '5.6em' : '3.5em ',
                        color : '#5d8d98',
                        // backgroundColor:'white',
                        WebkitTextStroke: mobile ?'0px darkblue' :'1px darkblue',
                    }}>
                    <Container textAlign="center" style={{cursor:'pointer'}}>
                        i need you like i've never needed anyone before
                    </Container>
                </Header>
            </Container>
    );
};

export default HeroTitle;