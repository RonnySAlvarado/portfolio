import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <small>
        © {new Date().getFullYear()} Ronny Alvarado · Staff Software Engineer
      </small>
      <Links>
        <a
          href="https://github.com/RonnySAlvarado"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ronnysalvarado/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:rsalvarado777@gmail.com">Email</a>
      </Links>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  border-top: 1px solid rgba(55, 65, 81, 0.8);
  padding: 2.4rem;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  color: #9ca3af;
  font-size: 1.2rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1.6rem;

  a {
    color: #e5e7eb;
    text-decoration: none;
    font-size: 1.3rem;
  }
`;
