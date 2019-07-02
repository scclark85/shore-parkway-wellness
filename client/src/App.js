import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Services from "./pages/services";
import Expect from "./pages/expect";
import Contact from "./pages/contact";

import Nav from "./components/Nav";
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/expect" component={Expect} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
