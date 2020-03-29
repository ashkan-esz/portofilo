import React from 'react';
import {Menu} from "semantic-ui-react";
import SvgIcon from "./SvgIcon";

const SocialIcons = ({mobile}) => {
    return (
        <Menu.Item position='right'>
            <div
                style={{cursor:'pointer'}}
                onClick={() => {openSocial('https://t.me/ashkanEsz')}}>
                <SvgIcon name="telegram.svg" size={(mobile) ? "35px" : "45px"} />
            </div>

            <div
                style={{marginLeft: '1.8em',marginRight:'1.5em',cursor:'pointer'}}
                onClick={() => {openSocial('https://www.instagram.com/ashkan__esz/')}}>
                <SvgIcon name="instagram.svg" size={(mobile) ? "35px" : "45px"} />
            </div>
        </Menu.Item>
    );
};

const openSocial = (link) => {
    window.open(link, '_blank');
};

export default SocialIcons;