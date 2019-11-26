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
          Environmental Geologist <br />
          and Full Stack Software Engineer
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
  h2 {
    font-size: 76px;
    margin: 6px 0 12px;
  }
  h4 {
    font-size: 28px;
    margin: 0 0 24px;
  }
  .ronny-info {
    width: 700px;
    border-top: 1px dashed white;
    border-bottom: 1px dashed white;
    text-align: center;
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
      &:hover {
        background: white;
        color: black;
      }
    }
  }
`;
