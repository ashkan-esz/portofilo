import React from 'react';
import {Grid, Segment} from "semantic-ui-react";
import Talent from "./Talent";

const TalentsList = () => {
    return (
        <div style={{marginTop: '1em'}}>
            <Grid container centered stackable relaxed style={{marginTop:'6vh'}}>
                <Grid.Row centered columns={"2"}>

                    <Grid.Column width={"7"}>
                        <h1> hi its ashkan</h1>
                    </Grid.Column>

                    <Grid.Column width={"8"}>
                        <Segment>

                            <Grid>

                                <Grid.Row columns={"2"} style={{paddingBottom:0}}>
                                    <Talent text={'react'} percent={40} color={'teal'}/>
                                </Grid.Row>

                                <Grid.Row columns={"2"} style={{paddingBottom:0}}>
                                    <Talent text={'html'} percent={60} color={'red'}/>
                                </Grid.Row>

                                <Grid.Row columns={"2"} style={{paddingBottom:0}}>
                                    <Talent text={'css'} percent={30} color={'olive'}/>
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