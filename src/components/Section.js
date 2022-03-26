import React, { Component } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Team from "./pages/Team/Team";
import { Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Timeline from "./pages/Team/Timeline/Timeline";
import UnderConstruction from "./Underconstruction/UnderConstruction";

export class Section extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route path = "" component={UnderConstruction} />
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route exact path="/team" component={Timeline}></Route>
          <Route exact path="/team/:year" component={Team} />
          <Route path="/performances" component={Team}></Route>
          <Route path="/profile/:name" component={Profile}></Route>
        </Switch>
      </section>
    );
  }
}

export default Section;
