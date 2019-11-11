import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import styled from "styled-components";
import About from "./components/About";
import { Link } from "react-router-dom";

function App() {
  return (
    <AppContainer>
      <div className="ronny-logo">Placeholder logo</div>
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
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/fineas-anton-stock-photo.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 76px;
    margin: 24px 0 12px;
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
    border: 1px solid white;
    width: 100px;
    height: 100px;
    margin-bottom: 24px;
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
