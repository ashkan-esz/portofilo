import React from 'react';
import {Grid, Label, Progress, Responsive} from "semantic-ui-react";

const mobile = window.innerWidth < Responsive.onlyTablet.minWidth;

const Talent = ({text, color, percent}) => {
    return (
        <React.Fragment>

            <Grid.Column className={'talent-col-label'} width={mobile ? "3" : "2"} textAlign={"center"}>
                <Label
                    className={mobile ? 'talent-col-label-mobile' : 'talent-col-label-desktop'}
                    pointing={"right"}
                    color={'teal'}
                    content={text}
                />
            </Grid.Column>

            <Grid.Column width={mobile ? "13" : "14"}>
                <Progress
                    className={'talent-progressbar'}
                    size="medium"
                    color={color}
                    percent={percent}
                    progress="percent"/>
            </Grid.Column>

        </React.Fragment>
    );
};

export default Talent;