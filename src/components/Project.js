import React from 'react';

const Project = ({ title, description, githubLink }) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={githubLink}>Github</a>
            </div>
    );
};

export default Project;