import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const projectsArray = [
  {
    name: "GigaPets",
    githubUrl: "https://github.com/gigapets-pt-bw",
    deployedUrl: "https://gigapet-bw.netlify.com/"
  },
  {
    name: "HiveStack",
    githubUrl: "https://github.com/wheretocode/WhereToCode",
    deployedUrl: "http://www.thehivestack.com/"
  },
  {
    name: "WeddingPlanner",
    githubUrl: "https://github.com/wedding-planner-portfolio",
    deployedUrl: "https://lambda-buildweek-wedding-planner.netlify.com/"
  }
];

const Projects = () => {
  return (
    <>
      <Navigation />
      <ProjectList>
        {projectsArray.map(project => {
          return (
            <ProjectCard
              name={project.name}
              githubUrl={project.githubUrl}
              deployedUrl={project.deployedUrl}
            />
          );
        })}
      </ProjectList>
    </>
  );
};

const ProjectCard = ({ name, githubUrl, deployedUrl }) => {
  return (
    <ProjectCardContainer>
      <h4>{name}</h4>
      <a href={deployedUrl}>
        <Image src={`/${name}img.png`} alt="project home page and dashboard" />
      </a>
      <a className="github-link" href={githubUrl}>
        See the Code
      </a>
    </ProjectCardContainer>
  );
};

export default Projects;

const Image = styled.img`
  width: 100%;
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
