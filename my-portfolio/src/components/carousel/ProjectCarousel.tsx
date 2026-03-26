import React from 'react';

const projects = [
    {
        title: 'Project 1',
        url: 'https://example.com/project1',
        description: 'Description of Project 1',
    },
    {
        title: 'Project 2',
        url: 'https://example.com/project2',
        description: 'Description of Project 2',
    },
    {
        title: 'Project 3',
        url: 'https://example.com/project3',
        description: 'Description of Project 3',
    },
];

const ProjectCarousel: React.FC = () => {
    return (
        <div className="carousel">
            {projects.map((project, index) => (
                <div key={index} className="carousel-item">
                    <h3>{project.title}</h3>
                    <iframe src={project.url} title={project.title} width="300" height="200"></iframe>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectCarousel;