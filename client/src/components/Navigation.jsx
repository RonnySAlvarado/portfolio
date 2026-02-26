import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <NavBar>
      <Brand href="#home">{"<R />"}</Brand>
      <NavLinks>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </NavBar>
  );
};

export default Navigation;

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 3.2rem;
  background: rgba(6, 12, 24, 0.9);
  backdrop-filter: blur(8px);
`;

const Brand = styled.a`
  font-size: 2.4rem;
  font-weight: 700;
  color: #f5f5f5;
  text-decoration: none;
  margin-right: auto;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.4rem;

  a {
    font-size: 1.6rem;
    color: #e5e7eb;
    text-decoration: none;
    position: relative;
  }

  a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.4rem;
    width: 0;
    height: 2px;
    background: #facc15;
    transition: width 0.2s ease-out;
  }

  a:hover::after {
    width: 100%;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
