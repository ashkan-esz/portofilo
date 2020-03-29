import React from 'react';
import {Grid, Label, Progress, Responsive} from "semantic-ui-react";

const mobile = window.innerWidth < Responsive.onlyTablet.minWidth;

const Talent = ({text, color, percent}) => {
    return (
        <React.Fragment>

            <Grid.Column width={mobile ? "3" : "2"} textAlign={"center"} style={{paddingRight: 0}}>
                <Label
                    style={{width: mobile ? '15vw' : '4.3vw'}}
                    pointing={"right"}
                    content={text}
                />
            </Grid.Column>

            <Grid.Column width={mobile ? "13" : "14"}>
                <Progress
                    style={{paddingLeft: 0, marginBottom: 0}}
                    size="medium"
                    color={color}
                    percent={percent}
                    progress="percent"/>
            </Grid.Column>
        </React.Fragment>
    );
};

export default Talent;