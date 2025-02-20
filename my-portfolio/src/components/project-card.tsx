import React from 'react';
import './project-card.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const ProjectCard = ({ title, description, image, link, tags }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="project-img"
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="project-footer">
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
