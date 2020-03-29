import React from 'react';
import {Grid, Responsive} from "semantic-ui-react";
import SvgIcon from "../SvgIcon";
import getWidth from "../getWidth";


const Titles = () => {
    const desktopStyle = {paddingTop: '0.3em', marginTop: 0, marginBottom: 0, fontSize: '1.5em'};
    const subHeaderStyle = {marginTop: '0.2em', fontWeight: 'normal', fontSize: '1.2em'};
    const mobileStyle = {marginTop: 0, marginBottom: 0, fontSize: '1.4em'};
    return (
        <div>
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Grid container style={{paddingTop: '3em'}}>
                    <Grid.Row centered columns={"4"}>

                        <Grid.Column textAlign="center">
                            <SvgIcon name={'responsive.svg'} size="70px" />
                            <h1 style={desktopStyle}>Responsive</h1>
                            <h2 style={subHeaderStyle}>My layouts will work on any device, big or small.</h2>
                        </Grid.Column>

                        <Grid.Column textAlign="center">
                            <SvgIcon name={'idea.svg'} size="70px" />
                            <h1 style={desktopStyle}>Intuitive</h1>
                            <h2 style={subHeaderStyle}>Easy to use.</h2>
                        </Grid.Column>

                        <Grid.Column textAlign="center">
                            <SvgIcon name={'fast.svg'} size="70px" />
                            <h1 style={desktopStyle}>Fast </h1>
                            <h2 style={subHeaderStyle}>Fast load times and lag free interaction.</h2>
                        </Grid.Column>

                        <Grid.Column textAlign="center">
                            <SvgIcon name={'learning.svg'} size="70px" />
                            <h1 style={desktopStyle}>Keep going </h1>
                            <h2 style={subHeaderStyle}>Keep learning.</h2>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Responsive>

            <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
                <Grid container style={{paddingTop: '3em'}}>
                    <Grid.Row centered columns={"2"}>
                        <Grid.Column textAlign="center">
                            <SvgIcon name={'responsive.svg'} size="70px" />
                            <h1 style={mobileStyle}>Responsive </h1>
                            <h2 style={subHeaderStyle}>My layouts will work on any device, big or small.</h2>
                        </Grid.Column>

                        <Grid.Column textAlign="center">
                            <SvgIcon name={'fast.svg'} size="70px" />
                            <h1 style={mobileStyle}>Fast </h1>
                            <h2 style={subHeaderStyle}>Fast load times and lag free interaction.</h2>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row centered columns={"2"}>
                        <Grid.Column textAlign="center">
                            <SvgIcon name={'idea.svg'} size="70px" />
                            <h1 style={mobileStyle}>Intuitive </h1>
                            <h2 style={subHeaderStyle}>Easy to use.</h2>
                        </Grid.Column>

                        <Grid.Column textAlign="center">
                            <SvgIcon name={'learning.svg'} size="70px" />
                            <h1 style={mobileStyle}>Keep going</h1>
                            <h2 style={subHeaderStyle}>Keep learning.</h2>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Responsive>

        </div>
    );
};

export default Titles;