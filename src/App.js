import React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import TeamPage from "./Components/Pages/Team/TeamPage";
import Main from "./Components/Pages/Home/Main";
import About from "./Components/Pages/About/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/TeamPage" component={TeamPage} />
        <Route path="/About" component={About} />
      </Switch>
      <Footer />
    </div>
  </Router>

);

export default App;
