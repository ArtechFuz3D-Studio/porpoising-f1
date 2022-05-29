import "./App.css";
import styled from "styled-components";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer"


import { Welcome } from "./pages/Welcome";
import { Guide } from "./pages/Guide";


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <CanvasContainer>

      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/Guide" exact component={Guide} />
        </Switch>
        
      </Router>
      <Footer />
    </CanvasContainer>
  );
}

export default App;
