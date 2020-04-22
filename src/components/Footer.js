import React from 'react';
import {Container, Grid, Segment} from "semantic-ui-react";
import SvgIcon from "./SvgIcon";
import './Footer.css';

const Footer = () => {
    return (
        <Segment
            className={'footer-div'}
            textAlign={"center"}>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <div className={'bottom-logo'}>
                            <SvgIcon name="logo3.svg" size={"200px"}/>
                            {/*//todo : change this logo*/}
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Container className={'footer-text'}  textAlign={"center"}>
                            Living, learning, & leveling up one day at a time.
                            {/*//todo : use flipping text animation for this part*/}
                        </Container>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row textAlign={"center"} centered divided>
                    <Grid.Column  textAlign={"center"}>
                        <div className={'footer-icon-div'}
                            onClick={() => {openSocial('https://t.me/ashkanEsz')}}>
                            <SvgIcon className={'footer-icon'} name="telegram.svg" size={"50px"}/>
                        </div>

                        <div className={'footer-icon-div'}
                            onClick={() => {openSocial('https://www.instagram.com/ashkan__esz/')}}>
                            <SvgIcon className={'footer-icon'} name="instagram.svg" size={"50px"}/>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

const openSocial = (link) => {
    window.open(link, '_blank');
};

export default Footer;