import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";

const About = () => {
  return (
    <>
      <Navigation />
      <AboutContainer>
        <HeaderText>
          Hello!
          <Image src="/ronnyprofilepic.jpg" alt="Ronny profile" />
          I’m Ronny, an Environmental Geologist and Full Stack Software Engineer
          based in Houston, TX.
        </HeaderText>
        <Text>
          Following my graduation from the University of Houston with a degree
          in Geology, I worked as a Field Scientist, collecting soil and water
          data in order to create long-term plans to restore contaminated
          environments. After five years in the field, I decided to pursue one
          of my life-long passions by attending Lambda School. As a student and
          Team/Section Lead at Lambda, I encourage team-building and creative
          problem-solving, and consistently look for new challenges.
        </Text>
        <TechStackContainer>
          <TechStack>
            <h2>Skills</h2>
            <Tech>
              <ul>
                <li>HTML &amp; CSS</li>
                <li>LESS/Sass</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>React Router</li>
              </ul>
              <ul>
                <li>Redux</li>
                <li>Context API</li>
                <li>Node</li>
                <li>Express</li>
                <li>SQL</li>
              </ul>
              <ul>
                <li>SQLite/PostgreSQL</li>
                <li>Git/GitHub</li>
                <li>React Testing Library</li>
                <li>Supertest</li>
                <li>Python</li>
              </ul>
            </Tech>
          </TechStack>
          <CurrentlyLearning>
            <h2>Currently Learning...</h2>
            <ul>
              <li>GraphQL</li>
              <li>Apollo</li>
              <li>Prisma</li>
              <li>Web Sockets</li>
            </ul>
          </CurrentlyLearning>
        </TechStackContainer>
      </AboutContainer>
    </>
  );
};

export default About;

const Image = styled.img`
  border-radius: 10px;
  width: 20%;
  margin: 10px 0;
  @media (max-width: 1300px) {
    width: 50%;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 5%;
  @media (max-width: 800px) {
    margin-top: 60px;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 150px;
  }
`;

const HeaderText = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  font-size: 2rem;
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: normal;
  font-size: 2rem;
  text-align: justify;
  margin: 0 0 30px 0;
  @media (max-width: 500px) {
    font-size: 1.6rem;
    padding: 0 10px;
  }
`;

const TechStackContainer = styled.div`
  color: white;
  display: flex;
  width: 100%;
  font-size: 1.6rem;
  h2 {
    margin: 0;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TechStack = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
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
  }
`;

const Tech = styled.div`
  display: flex;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
