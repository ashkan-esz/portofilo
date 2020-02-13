import React from 'react';
import {Button, Icon, Menu} from "semantic-ui-react";

const NavBarSocialIcons = () => {
    return (
        <Menu.Item position='right'>
            <Button
                as='a'
                animated='vertical'
                color="blue"
                onClick={() => {
                    openSocial('https://t.me/ashkanEsz')
                }}>
                <Button.Content visible> Telegram </Button.Content>
                <Button.Content hidden> <Icon name='arrow right'/></Button.Content>
            </Button>

            <Button
                as='a'
                animated="vertical"
                color="instagram"
                className="instagram-btn"
                onClick={() => {
                    openSocial('https://www.instagram.com/ashkan__esz/')
                }}>
                <Button.Content visible> <Icon name="instagram"/></Button.Content>
                <Button.Content hidden><Icon name='arrow right'/></Button.Content>
            </Button>
        </Menu.Item>
    );
};

const openSocial = (link) => {
    window.open(link, '_blank');
};

export default NavBarSocialIcons;