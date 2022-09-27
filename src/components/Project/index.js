import React, { useState } from 'react';

const Project = ({ name }) => {
    const [projects] = useState([
        {
            name: 'Tech Blog',
            link: 'https://github.com/CaitlinParsons25/tech-blog.git'
        },
        {
            name: "Women's Tech Forum",
            link: "https://github.com/CaitlinParsons25/womens-tech-forum.git"
        },
        {
            name: "README generator",
            link: "https://github.com/CaitlinParsons25/readme-generator.git"
        },
        {
            name: "Uni-QOL",
            link: "https://github.com/CaitlinParsons25/uni-qol.git"
        },
        {
            name: "Work day scheduler",
            link: "https://github.com/CaitlinParsons25/work-day-scheduler.git"
        },
        {
            name: "Password generator",
            link: "https://github.com/CaitlinParsons25/password-generator.git"
        }
    ]);

    const currentProject = projects.filter((project) => project.name === name);

    return (
        <div classname='flex-row'>
                <img src="../../assets/project.jpg"
                alt="coding on screen"/>
            {currentProject.map((link) => (
                <a href={link}>GitHub repository</a>
            ))}
        </div>
    )
};

export default Project;