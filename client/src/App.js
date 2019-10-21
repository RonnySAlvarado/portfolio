import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import styled from "styled-components";
import About from "./components/About";

function App() {
  return (
    <AppContainer>
      <Navigation />
      <About />
      <ProjectCard />
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  border: 1px solid red;
  width: 80%;
  // height: 99.8vh;
  margin: 0 auto;
`;
