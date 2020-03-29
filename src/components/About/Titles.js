import React from 'react';
import {Grid, Responsive} from "semantic-ui-react";
import SvgIcon from "../SvgIcon";
import getWidth from "../getWidth";


const Titles = () => {
    return (
        <div>
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Grid container className={'titles-desktop'}>
                    <Grid.Row centered columns={"4"}>

                        <Grid.Column textAlign="center">
                            <SvgIcon name={'responsive.svg'} size="70px" />
                            <h1>Responsive</h1>
                            <h2>My layouts will work on any device, big or small.</h2>
                        </Grid.Column>

                        <Grid.Column textAlign="center">
                            <SvgIcon name={'idea.svg'} size="70px" />
                            <h1>Intuitive</h1>
                            <h2>Easy to use.</h2>
                        </Grid.Column>

                        <Grid.Column textAlign="center">
                            <SvgIcon name={'fast.svg'} size="70px" />
                            <h1>Fast </h1>
                            <h2>Fast load times and lag free interaction.</h2>
                        </Grid.Column>

                        <Grid.Column textAlign="center">
                            <SvgIcon name={'learning.svg'} size="70px" />
                            <h1>Keep going </h1>
                            <h2>Keep learning.</h2>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Responsive>

            <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
                <Grid container className={'titles-mobile'}>
                    <Grid.Row centered columns={"2"}>
                        <Grid.Column textAlign="center">
                            <SvgIcon name={'responsive.svg'} size="70px" />
                            <h1>Responsive </h1>
                            <h2>My layouts will work on any device, big or small.</h2>
                        </Grid.Column>

                        <Grid.Column textAlign="center">
                            <SvgIcon name={'fast.svg'} size="70px" />
                            <h1>Fast </h1>
                            <h2>Fast load times and lag free interaction.</h2>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row centered columns={"2"}>
                        <Grid.Column textAlign="center">
                            <SvgIcon name={'idea.svg'} size="70px" />
                            <h1>Intuitive </h1>
                            <h2>Easy to use.</h2>
                        </Grid.Column>

                        <Grid.Column textAlign="center">
                            <SvgIcon name={'learning.svg'} size="70px" />
                            <h1>Keep going</h1>
                            <h2>Keep learning.</h2>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Responsive>

        </div>
    );
};

export default Titles;