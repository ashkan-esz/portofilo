import React from 'react';
import {Header, Segment} from "semantic-ui-react";

const ItsMe = () => {
    return (
        <Segment className={'its-me-segment'}>
            <Header
                className={'its-me'}
                as="h1"
                textAlign={"center"}
                color="black">
                <Header.Content>Hi, I’m Ashkan. Nice to meet you</Header.Content>
            </Header>

            <h2 className={'its-me-text'}>
                its been 2 years since i start study at Babol Noshirvani (University of Technology).
            </h2>

            <h2 className={'its-me-text'}>
                since 1 year ago i study Reactjs and nodejs and i loved them
            </h2>

            <h2 className={'its-me-text'}>
                and now i hope i can make good websites.
            </h2>
        </Segment>
    );
};

export default ItsMe;