import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer>
      <Text>
        Hello, I'm Ronny Alvarado
        <br />
        I'm an environmental geologist <br /> and full-stack software engineer.
      </Text>
      <Image src="/ronnyprofilepic.jpg" alt="Ronny profile" />
    </AboutContainer>
  );
};

export default About;

const Image = styled.img`
  border-radius: 10px;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Text = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;
