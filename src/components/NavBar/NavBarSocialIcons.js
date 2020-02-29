import React from 'react';
import {Button, Icon, Menu} from "semantic-ui-react";
import SvgIcon from "./SvgIcon";

const NavBarSocialIcons = ({mobile}) => {
    return (
        <Menu.Item position='right'>
            <Button
                as='a'
                animated={(!mobile) ? 'vertical' : null}
                onClick={() => {
                    openSocial('https://t.me/ashkanEsz')
                }}>
                <Button.Content visible> <SvgIcon name="telegram.svg"/> </Button.Content>
                {(!mobile) && <Button.Content hidden> <Icon name='arrow right'/></Button.Content>}
            </Button>

            <Button
                as='a'
                animated={(!mobile) ? 'vertical' : null}
                style={{marginLeft: '0.5em'}}
                onClick={() => {
                    openSocial('https://www.instagram.com/ashkan__esz/')
                }}>
                <Button.Content visible> <SvgIcon name="instagram.svg"/></Button.Content>
                {(!mobile) && <Button.Content hidden><Icon name='arrow right'/></Button.Content>}
            </Button>
        </Menu.Item>
    );
};

const openSocial = (link) => {
    window.open(link, '_blank');
};

export default NavBarSocialIcons;