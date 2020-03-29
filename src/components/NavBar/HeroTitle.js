import React from 'react';
import {Button, Container, Header} from "semantic-ui-react";
import {Link, useLocation} from "react-router-dom";

const HeroTitle = ({mobile}) => {
    const location = useLocation();
    return (
        <Container text>
            <Header
                className={'hero-title ' + (mobile ? ' hero-title1-mobile' : ' hero-title1-desktop')}
                as='h3'
                textAlign={"center"}
                content={'Hello People, My Name Is'}/>

            <Header
                className={'hero-title ' + (mobile ? ' hero-title2-mobile' : ' hero-title2-desktop')}
                as='h1'
                textAlign={"center"}
                content={'ASHKAN ESZ'}/>

            <Header
                className={'hero-title ' + (mobile ? ' hero-title3-mobile' : ' hero-title3-desktop')}
                as='h2'
                textAlign={"center"}
                content={'Front-End Developer & Coding Addict '}/>

            {(location.pathname === '/') && <div className={'hero-buttons'}>
                <Button
                    onClick={() => {
                        window.scrollTo({top: document.documentElement.clientHeight});
                    }}
                    color={"black"}
                    content={'Know More'}/>

                <Button
                    className={'hero-buttons-button'}
                    as={Link} to="/projects"
                    color={"grey"}
                    content={'See My Works'}/>
            </div>}
        </Container>
    );
};


export default HeroTitle;