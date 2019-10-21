import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <NavContainer>
      <FirstInitial>R.</FirstInitial>
      <div>
        <NavLink to="/" activeClassName="selected">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </NavContainer>
  );
};

export default Navigation;

const FirstInitial = styled.h2`
  font-size: 1.5rem;
  border: 3px solid black;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 1.5rem;
    padding-left: 30px;
    color: black;
    &:hover {
      color: red;
    }
  }
`;
