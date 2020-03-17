import React from 'react';
import Particles from "react-particles-js";

const ParticlesBackground = () => {

    // const params = {
    //     "particles": {
    //         "number": {
    //             "value": (mobile) ? 70 : 90,
    //             "density": {
    //                 "enable": true,
    //                 "value_area": 500
    //             }
    //         },
    //         "color": {
    //             "value": "#fff"
    //         },
    //         "shape": {
    //             "type": "circle",
    //             "stroke": {
    //                 "width": 0,
    //                 "color": "#000000"
    //             },
    //         },
    //         "opacity": {
    //             "value": 0.5,
    //             "random": true,
    //             "anim": {
    //                 "enable": true,
    //                 "speed": 1,
    //                 "opacity_min": 0.07,
    //                 "sync": false
    //             }
    //         },
    //         "size": {
    //             "value": 4,
    //             "random": true,
    //             "anim": {
    //                 "enable": true,
    //                 "speed": 1,
    //                 "size_min": 0.08,
    //                 "sync": false
    //             }
    //         },
    //         "line_linked": {
    //             "enable": true,
    //             "distance": 100,
    //             "color": "#ffffff",
    //             "opacity": 0.06,
    //             "width": 2.0480504135486406
    //         },
    //         "move": {
    //             "enable": true,
    //             "speed": 0.2,
    //             "direction": "right",
    //             "random": false,
    //             "straight": false,
    //             "out_mode": "out",
    //             "bounce": false,
    //             "attract": {
    //                 "enable": false,
    //                 "rotateX": 600,
    //                 "rotateY": 1200
    //             }
    //         }
    //     },
    //     "interactivity": {
    //         "detect_on": "window",
    //         "events": {
    //             "onclick": {
    //                 "enable": true,
    //                 "mode": "push"
    //             },
    //             "resize": true
    //         },
    //         "modes": {
    //             "push": {
    //                 "particles_nb": 2
    //             },
    //             "remove": {
    //                 "particles_nb": 1
    //             }
    //         }
    //     },
    //     "retina_detect": true
    // };

    const params = {
        "particles": {
            "number": {
                "value": 350,
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
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
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
                // todo : need changes its ugly
                height={'100vh'}
                width={"100%"}
                style={{background: '#060229'}}
                params={params}/>
        </div>
    );
};

export default ParticlesBackground;
