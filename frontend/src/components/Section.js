import React, { Component } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Team from "./pages/Team/Team";
import Team2 from "./pages/Team/2.0/Team2";
import Performances from "./pages/Performances";
import { Route } from "react-router-dom";

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team}></Route>
        <Route path="/performances" component={Performances}></Route>
        <Route path="/2.0" component={Team2} />
      </section>
    );
  }
}

export default Section;
