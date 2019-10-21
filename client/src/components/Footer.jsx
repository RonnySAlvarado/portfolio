import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <h2>Let's Connect</h2>
      <h3>
        Feel free to reach out for collaborations or just a friendly hello
        <br />
        rsalvarado777@gmail.com
      </h3>
      <SocialMedia>
        <img src="/github-square-brands.svg" alt="github logo" />
        <img src="/linkedin-brands.svg" alt="linkedin logo" />
        <img src="/twitter-square-brands.svg" alt="twitter logo" />
        <img src="/envelope-square-solid.svg" alt="email logo" />
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    width: 5%;
  }
`;
