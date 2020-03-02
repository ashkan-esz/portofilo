import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = ({width, height, name}) => {
    return (
        <img
            width={width}
            height={height}
            src={require(`../assests/icons/${name}`)} alt={`${name.split('.')[0]} + icon`}/>
    );
};

SvgIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string.isRequired,
};

SvgIcon.defaultProps = {
    width: '35px',
    height: '35px',
};

export default SvgIcon;