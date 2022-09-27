import React from 'react';
import Project from '../Project';

function Portfolio({ currentProject }) {
    const { name, link } = currentProject;
    return (
        <section>
            <h2>{name}</h2>
            <p>{link}</p>
            <Project project={currentProject.name} />
        </section>
    )
};

export default Portfolio;