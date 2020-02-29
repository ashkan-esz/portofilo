import React from 'react';
import {Container, Header} from "semantic-ui-react";


// .hero-image {
//     /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
//     background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("photographer.jpg");
//
//     /* Set a specific height */
//     height: 50%;
//
//     /* Position and center the image to scale nicely on all screens */
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     position: relative;
// }
//
// /* Place text in the middle of the image */
// .hero-text {
//     text-align: center;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     color: white;
// }


// .defaultHero,
// .roomsHero {
//     min-height: calc(100vh - 66px);
//     background: url("images/defaultBcg.jpeg") center/cover no-repeat;
//     display: flex;
//     alignItems : 'center',
//         justifyContent : 'center'
//     align-items: center;
//     justify-content: center;
// }
// .roomsHero {
//     background-image: url("images/room-2.jpeg");
//     min-height: 60vh;
// }

const NavBarTitle = ({mobile}) => {
    return (
        <Container text>
            <Header
                as='h2'
                // color={mobile ? null : "blue"}
                content='The 1,000-mile marathon begins with the first step'
                inverted
                style={{
                    fontWeight: 'normal',
                    marginBottom: 0,
                    fontSize: mobile ? '1.9em' : '3.1em',
                    marginTop: mobile ? '4em' : '1.7em ',
                    color : '#72ff77'
                }}
            />
        </Container>
    );
};

export default NavBarTitle;