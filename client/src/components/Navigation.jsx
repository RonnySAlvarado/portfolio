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
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
  padding-left: 20%;
  a {
    text-decoration: none;
    font-size: 1.5rem;
    padding-left: 30px;
  }
`;
