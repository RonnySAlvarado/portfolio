import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import styled from "styled-components";
import About from "./components/About";
import { Link, Route } from "react-router-dom";

import Landing from "./components/Landing";

function App() {
  return (
    <AppContainer>
      <Route exact path="/" component={Landing} />
      <Route path="/projects" component={Projects} />
      {/* <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}
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
  display: flex;
  justify-content: center;
  align-items: center;
`;
