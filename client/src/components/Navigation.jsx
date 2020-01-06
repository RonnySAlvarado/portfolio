import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <NavContainer>
      <NavLink to="/" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </NavContainer>
  );
};

export default Navigation;

const NavContainer = styled.nav`
  position: relative;
  width: 98.9%;
  text-align: center;
  background: black;
  opacity: 0.5;
  padding: 1rem;
  a {
    font-size: 2.4rem;
    padding-left: 30px;
    color: white;
    &:hover {
      color: gold;
    }
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
    a {
      border-bottom: 2px solid white;
      text-decoration: none;
      padding: 15px;
    }
  }
`;
