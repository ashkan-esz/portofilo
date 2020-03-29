import React from 'react';
import Particles from "react-particles-js";

const ParticlesBackground = () => {

    const params = {
        "particles": {
            "number": {
                "value": 0,
                "density": {
                    "enable": true,
                    "value_area": 900
                }
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 500,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "resize": true
            }
        },
        "retina_detect": true
    };
    return (
        <div style={{
            position: 'absolute',
            zIndex: -1,
        }}>
            <Particles
                height={'100vh'}
                width={"100vw"}
                // style={{background: '#060229'}}
                // style={{background: '#4e66c9'}}
                // style={{background: '#2c2c34'}}
                style={{background: '#232530'}}
                params={params}/>
        </div>
    );
};

export default ParticlesBackground;
