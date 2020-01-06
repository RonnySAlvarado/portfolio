import React from "react";
import "./App.css";
import Projects from "./components/Projects";
import styled from "styled-components";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route } from "react-router-dom";

import Landing from "./components/Landing";

function App() {
  return (
    <AppContainer>
      <Route exact path="/" component={Landing} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div``;
