import React from 'react';

const Project = ({imageName,text}) => {
    return (
        <div className={'project'}>

            <img
                 className={'project-image'}
                 alt={'portofilo-site'}
                 src={require(`../../assests/images/${imageName}`)}/>

            <div className={'project-text'}>
                {text}
            </div>

        </div>
    );
};

export default Project;