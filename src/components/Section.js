import React, { Component } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Timeline from "./pages/Team/Timeline/Timeline";
import Team2 from "./pages/Team/2.0/Team2";
import { Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile/Profile";

export class Section extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route exact path="/team" component={Timeline}></Route>
          <Route exact path="/team/:year" component={Team2} />
          <Route path="/performances" component={Team2}></Route>
          <Route path="/profile/:name" component={Profile}></Route>
        </Switch>
      </section>
    );
  }
}

export default Section;
