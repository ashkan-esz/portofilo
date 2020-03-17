import React from 'react';
import SvgIcon from "../SvgIcon";

const SeeMore = ({mobile}) => {
    return (
        <div
            style={{textAlign: 'center', paddingTop: mobile ? '24em' : '15em'}}>
            <div
                style={{cursor: 'pointer'}}
                onClick={() => {window.scrollTo({top: document.documentElement.clientHeight * 1.01, behavior: 'smooth'})}}>

                <SvgIcon
                    name={'down-arrow.svg'}
                    width={(mobile) ? "45px" : "50px"}
                    height={(mobile) ? "45px" : "50px"}/>

            </div>
        </div>
    );
};

export default SeeMore;