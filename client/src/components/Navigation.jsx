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
  position: absolute;
  top: 0;
  width: 100%;
  height: 40px;
  text-align: center;
  background: black;
  opacity: 0.5;
  a {
    font-size: 24px;
    padding-left: 30px;
    color: white;
    &:hover {
      color: gold;
    }
  }
`;
