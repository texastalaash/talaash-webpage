import React, { Component } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Performances from "./pages/Performances";
import { Route } from "react-router-dom";

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/performances" component={Performances} />
      </section>
    );
  }
}

export default Section;
