import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Services from "./pages/services";
import Expect from "./pages/expect";
import Staff from "./pages/staff";
import Contact from "./pages/contact";

import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Map from "./components/Map"

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
          <Route exact path="/staff" component={Staff} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Map />
        <Footer />
      </Router>
    );
  }
}

export default App;
