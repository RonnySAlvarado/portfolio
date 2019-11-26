import React from "react";
import styled, { keyframes } from "styled-components";

import Navigation from "./Navigation";

const projectsArray = [
  {
    name: "GigaPets",
    githubUrl: "https://github.com/gigapets-pt-bw",
    deployedUrl: "https://gigapet-bw.netlify.com/",
    description: "A web app that allows users to create and feed virtual pets",
    stack:
      "React | React Router | Redux | Styled-Components | Charts.js | Express | SQLite | PostgreSQL | Jest | Supertest"
  },
  {
    name: "HiveStack",
    githubUrl: "https://github.com/wheretocode/WhereToCode",
    deployedUrl: "http://www.thehivestack.com/",
    description:
      "A community-driven web app that allows users to search for nearby locations for reliable internet in order to work remotely, study, or stream",
    stack:
      "React | React Router | Styled-Components | Firebase | Google Maps API | Speedtest | Express | PostgreSQL"
  },
  {
    name: "WeddingPlanner",
    githubUrl: "https://github.com/wedding-planner-portfolio",
    deployedUrl: "https://lambda-buildweek-wedding-planner.netlify.com/",
    description:
      "A web app that allows users to create event details for an upcoming wedding",
    stack:
      "React | React Router | Redux | Styled-Components | Reactstrap | Express | PostgreSQL"
  }
];

const Projects = () => {
  return (
    <>
      <Navigation />
      <ProjectList>
        {projectsArray.map(project => {
          return <ProjectCard project={project} />;
        })}
      </ProjectList>
    </>
  );
};

const ProjectCard = ({
  project: { name, githubUrl, deployedUrl, description, stack }
}) => {
  return (
    <ProjectCardContainer>
      <h4>{name}</h4>
      <p>{description}</p>
      <a href={deployedUrl}>
        <Image src={`/${name}img.png`} alt="project home page and dashboard" />
      </a>
      <p>{stack}</p>
      <a className="github-link" href={githubUrl}>
        See the Code
      </a>
    </ProjectCardContainer>
  );
};

export default Projects;

const webkit_swing = keyframes`
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
       transform: translateX(-5px);
    } 
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
`;

const swing = keyframes`
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
`;

const Image = styled.img`
  width: 100%;
  &:hover {
    -webkit-animation: ${webkit_swing} 1s ease;
    animation: ${swing} 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
`;

const ProjectList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  color: white;
  h4 {
    font-size: 48px;
    text-align: center;
    margin: 0 0 20px 0;
  }
  p {
    height: 70px;
    text-align: center;
    font-size: 20px;
  }
  .github-link {
    width: 36%;
    margin-top: 20px;
    text-decoration: none;
    font-size: 24px;
    text-align: center;
    color: white;
    border-bottom: 1px dotted white;
  }
`;
