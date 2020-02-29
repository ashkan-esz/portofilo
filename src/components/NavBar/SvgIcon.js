import React from 'react';
import PropTypes from 'prop-types';

// todo : fix these icons , size and background shadow

const SvgIcon = ({width, height, name}) => {
    return (
        <img
            width={width}
            height={height}
            src={require(`../../assests/icons/${name}`)} alt="instagram icon"/>
    );
};

SvgIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string.isRequired,
};

SvgIcon.defaultProps = {
    width: '30px',
    height: '30px',
};

export default SvgIcon;