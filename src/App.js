import React from 'react';
import './App.css';
import Nav from "./components/Nav/index"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path={["/"]}>
            <About />
          </Route>
          <Route exact path={["/about"]}>
            <About />
          </Route>
          <Route exact path={["/portfolio"]}>
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;