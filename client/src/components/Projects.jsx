import React from "react";
import styled, { keyframes } from "styled-components";

import Navigation from "./Navigation";

const projectsArray = [
  {
    name: "GigaPets",
    image: "https://i.imgur.com/sYjLAqe.png",
    githubUrl: "https://github.com/gigapets-pt-bw",
    deployedUrl: "https://gigapet-bw.netlify.com/",
    description: "A web app that allows users to create and feed virtual pets",
    stack:
      "React | React Router | Redux | Styled-Components | Charts.js | Express | SQLite | PostgreSQL | Jest | Supertest"
  },
  {
    name: "HiveStack",
    image: "https://i.imgur.com/eI9sjwW.png",
    githubUrl: "https://github.com/wheretocode/WhereToCode",
    deployedUrl: "https://thehivestack.netlify.app/",
    description:
      "A community-driven web app that allows users to search for nearby locations for reliable internet in order to work remotely, study, or stream",
    stack:
      "React | React Router | Styled-Components | Firebase | Google Maps API | Speedtest | Express | PostgreSQL"
  },
  {
    name: "Recharts + Websocket Project",
    image: "https://i.imgur.com/nU8Wu7M.jpg",
    githubUrl: "https://github.com/RonnySAlvarado/Socketio-project",
    deployedUrl: "https://websocket-data-charts-renderer.netlify.com/",
    description:
      "A web app that utilizes websocket to simulate incoming data and renders the information using a charts library",
    stack: "React | React Router | Recharts | Styled-Components | Socket.io"
  },
  {
    name: "WeddingPlanner",
    image: "https://i.imgur.com/H06QLnn.png",
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
    <ProjectPageContainer>
      <Navigation />
      <ProjectList>
        {projectsArray.map(project => {
          return <ProjectCard project={project} />;
        })}
      </ProjectList>
    </ProjectPageContainer>
  );
};

const ProjectCard = ({
  project: { name, githubUrl, deployedUrl, description, stack, image }
}) => {
  return (
    <ProjectCardContainer>
      <h4>{name}</h4>
      <p className="description">{description}</p>
      <a href={deployedUrl}>
        <Image src={image} alt="project home page and dashboard" />
      </a>
      <p className="stack">{stack}</p>
      <a className="github-link" href={githubUrl}>
        See the Code
      </a>
    </ProjectCardContainer>
  );
};

export default Projects;

const ProjectPageContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://i.imgur.com/0pnAsBg.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100%;
`;

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
  height: 40rem;
  &:hover {
    -webkit-animation: ${webkit_swing} 1s ease;
    animation: ${swing} 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
  @media (max-width: 1300px) {
    margin: 20px 0;
  }
  @media (max-width: 500px) {
    height: 30rem;
    margin-top: 50px;
    width: 80%;
  }
`;

const ProjectList = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1%;
  justify-content: space-evenly;
  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`;

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  color: white;
  h4 {
    font-size: 2.4rem;
    text-align: center;
    margin: 0 0 20px 0;
    @media (max-width: 1300px) {
      margin: 20px 0 0 0;
      font-size: 3.2rem;
    }
  }
  p {
    text-align: center;
    font-size: 1.6rem;
    margin: 0;
  }
  .description {
    height: 7rem;
    @media (max-width: 1300px) {
      height: 4rem;
      margin-bottom: 2rem;
      font-size: 2rem;
      width: 100%;
    }
  }
  .stack {
    margin-top: 10px;
  }
  .github-link {
    width: 36%;
    margin-top: 20px;
    font-size: 2.4rem;
    text-align: center;
    color: white;
    @media (max-width: 1300px) {
      margin: 2rem;
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    border-bottom: 2px solid white;
  }
  a {
    display: flex;
    justify-content: center;
  }
`;
