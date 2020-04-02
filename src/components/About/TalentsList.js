import React from 'react';
import {Grid, Segment} from "semantic-ui-react";
import Talent from "./Talent";
import ItsMe from "./ItsMe";

const TalentsList = () => {
    return (
        <div>
            <Grid className={'talent-list'} container centered stackable relaxed>
                <Grid.Row centered columns={"2"}>

                    <Grid.Column width={"7"}>
                        <ItsMe/>
                    </Grid.Column>

                    <Grid.Column width={"8"}>
                        <Segment className={'talent-list-segment'}>
                            <Grid>
                                <Grid.Row className={'talent-row'} columns={"2"}>
                                    <Talent text={'React'} percent={55} color={'green'}/>
                                </Grid.Row>

                                <Grid.Row className={'talent-row'} columns={"2"} >
                                    <Talent text={'Nodejs'} percent={15} color={'blue'}/>
                                </Grid.Row>

                                <Grid.Row className={'talent-row'} columns={"2"} >
                                    <Talent text={'JS'} percent={50} color={'violet'}/>
                                </Grid.Row>

                                <Grid.Row className={'talent-row'} columns={"2"} >
                                    <Talent text={'HTML'} percent={75} color={'orange'}/>
                                </Grid.Row>

                                <Grid.Row className={'talent-row'} columns={"2"} >
                                    <Talent text={'CSS'} percent={45} color={'olive'}/>
                                </Grid.Row>

                                <Grid.Row className={'talent-row-last'} columns={"2"} >
                                    <Talent text={'React Native'} percent={1} color={'yellow'}/>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default TalentsList;