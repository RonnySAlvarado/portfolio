import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Landing = () => {
  return (
    <LandingPageContainer>
      <ContentContainer>
        <div className="ronny-logo">{"<R />"}</div>
        <div className="ronny-info">
          <h2>Ronny Alvarado</h2>
          <h4>
            ⛏ Environmental Geologist ⛏
            <br />
            💻 Full Stack Software Engineer 💻
          </h4>
        </div>
        <div className="ronny-routes">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </ContentContainer>
    </LandingPageContainer>
  );
};

export default Landing;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  .ronny-info {
    width: 100%;
    border-top: 1px dashed white;
    border-bottom: 1px dashed white;
    text-align: center;
    h2 {
      font-size: 7.6rem;
      margin: 6px 0 12px;
      @media (max-width: 500px) {
        border-top: 2px solid white;
        font-size: 4.8rem;
      }
    }
    h4 {
      font-size: 2.8rem;
      margin: 0 0 24px;
      @media (max-width: 500px) {
        border-top: 2px solid white;
        border-bottom: 1px solid white;
        margin-bottom: 0;
        padding: 20px 0;
        font-size: 2rem;
      }
    }
    @media (max-width: 500px) {
      border: none;
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
      margin: 30px 0;
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
        border-bottom: 2px solid white;
        width: 100vw;
        text-align: center;
        height: 5rem;
        font-size: 2rem;
        font-weight: bold;
        padding-top: 5%;
      }
    }
  }
  @media (max-width: 1150px) {
    width: 60%;
  }
  @media (max-width: 950px) {
    width: 70%;
  }
  @media (max-width: 815px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const LandingPageContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/fineas-anton-stock-photo.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    height: 100%;
  }
`;
