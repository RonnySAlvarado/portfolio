import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";

const About = () => {
  return (
    <AboutContainer>
      <Navigation />
      <AllText>
        <HeaderText>
          <Image src="https://i.imgur.com/97FR8fv.jpg" alt="Ronny profile" />
          I’m Ronny, an Environmental Geologist and Full Stack Software Engineer
          based in Houston, TX.
        </HeaderText>
        <ParagraphText>
          Following my graduation from the University of Houston with a degree
          in Geology, I worked as a Field Scientist, collecting soil and water
          data in order to create long-term plans to restore contaminated
          environments. After five years in the field, I decided to pursue one
          of my life-long passions by attending Lambda School. As a student and
          Team/Section Lead at Lambda, I encourage team-building and creative
          problem-solving, and consistently look for new challenges.
        </ParagraphText>
      </AllText>
      <TechStackContainer>
        <TechStack>
          <h2>Skills</h2>
          <Tech>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>LESS/Sass</li>
              <li>Styled Components</li>
              <li>JavaScript</li>
            </ul>
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Redux</li>
              <li>Node</li>
              <li>Express</li>
            </ul>
            <ul>
              <li>SQLite/PostgreSQL</li>
              <li>Git/GitHub</li>
              <li>Netlify</li>
              <li>Heroku</li>
              <li>Bcryptjs</li>
              <li>JWT</li>
            </ul>
          </Tech>
        </TechStack>
        <CurrentlyLearning>
          <h2>Currently Learning...</h2>
          <ul>
            <li>Python</li>
            <li>Flask</li>
            <li>GraphQL</li>
            <li>Apollo</li>
            <li>Prisma</li>
            <li>Web Sockets</li>
          </ul>
        </CurrentlyLearning>
      </TechStackContainer>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://i.imgur.com/0pnAsBg.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  min-height: 100vh;
  height: 100%;
`;

const AllText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
`;

const Image = styled.img`
  border-radius: 10px;
  margin: 10px 0;
  width: 30%;
  @media (max-width: 800px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 70%;
  }
`;

const HeaderText = styled.h1`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  font-size: 2rem;
  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const ParagraphText = styled.p`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: normal;
  font-size: 2rem;
  text-align: justify;
  margin: 0 0 30px 0;
  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    font-size: 1.6rem;
    padding: 0 10px;
    width: 90%;
  }
`;

const TechStackContainer = styled.div`
  color: white;
  display: flex;
  width: 50%;
  h2 {
    margin: 0;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 800px) {
    font-size: 2rem;
    width: 90%;
  }
`;

const TechStack = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2.4rem;
  }
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

const CurrentlyLearning = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  text-align: center;
  ul {
    padding: 0;
    font-size: 2rem;
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
  h2 {
    font-size: 2.4rem;
  }
`;

const Tech = styled.div`
  display: flex;
  ul {
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    li {
      @media (max-width: 500px) {
        font-size: 1.5rem;
      }
    }
  }
`;
