import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = ({name,size}) => {
    return (
        <img
            width={size}
            height={size}
            src={require(`../assests/icons/${name}`)} alt={`${name.split('.')[0]} + icon`}/>
    );
};

SvgIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string.isRequired,
};

SvgIcon.defaultProps = {
    size: '35px',
};

export default SvgIcon;