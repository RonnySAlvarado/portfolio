import React from "react";
import styled from "styled-components";

const ProjectCard = () => {
  return (
    <ProjectCardContainer>
      <Image src="/gigapetlogin.png" alt="gigapet login page" />
      <Image src="/gigapet.png" alt="gigapet dashboard" />
      <h4>Project: GigaPets</h4>
      <h4>GitHub: https://github.com/gigapets-pt-bw</h4>
      <h4>Site: https://gigapet-bw.netlify.com/</h4>
    </ProjectCardContainer>
  );
};

export default ProjectCard;

const Image = styled.img`
  width: 100%;
`;

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid orange;
`;
