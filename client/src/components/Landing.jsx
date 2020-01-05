import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Landing = () => {
  return (
    <LandingContainer>
      <div className="ronny-logo">{"<R />"}</div>
      <div className="ronny-info">
        <h2>Ronny Alvarado</h2>
        <h4>
          ⛏ Environmental Geologist ⛏
          <br />
          💻 and Full Stack Software Engineer 💻
        </h4>
      </div>
      <div className="ronny-routes">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </LandingContainer>
  );
};

export default Landing;

const LandingContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  h2 {
    font-size: 7.6rem;
    margin: 6px 0 12px;
    @media (max-width: 500px) {
      font-size: 3.2rem;
    }
  }
  h4 {
    font-size: 2.8rem;
    margin: 0 0 24px;
    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
  .ronny-info {
    width: 100%;
    border-top: 1px dashed white;
    border-bottom: 1px dashed white;
    text-align: center;
    @media (max-width: 500px) {
      border-top: 2px solid white;
      border-bottom: none;
    }
  }
  .ronny-logo {
    border: 2px solid white;
    width: 100px;
    height: 100px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 32px;
    @media (max-width: 500px) {
      margin-bottom: 30px;
    }
  }
  .ronny-routes {
    margin-top: 24px;
    display: flex;
    a {
      border: 1px solid white;
      padding: 10px 50px;
      text-decoration: none;
      color: white;
      margin-right: 5px;
      font-size: 1.6rem;
      &:hover {
        background: white;
        color: black;
      }
    }
    @media (max-width: 500px) {
      flex-direction: column;
      margin-top: 0;
      a {
        border: 2px solid white;
        width: 100vw;
        text-align: center;
        height: 5rem;
        font-size: 2rem;
        font-weight: bold;
        padding-top: 5%;
      }
    }
  }
  @media (max-width: 500px) {
    margin-top: 30px;
  }
`;
