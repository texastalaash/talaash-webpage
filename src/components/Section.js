import Home from "./pages/Home/Home";
import About from "./pages/About";
import Team from "./pages/Team/Team";
import { Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Timeline from "./pages/Team/Timeline/Timeline";
import UnderConstruction from "./Underconstruction/UnderConstruction";
import { useEffect } from "react";


import React from 'react'
import { useLocation } from "react-router-dom";
import Sponsorship from "./pages/Sponsorship/Sponsorship";

const Section = () => {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section>
      <Switch>
        {/* <Route path = "" component={UnderConstruction} /> */}
        <Route path="/" component={Home} exact />
        <Route exact path="/team" component={Timeline}></Route>
        <Route
          path="/team/:year"
          component={(props) => (
            <Team
              key={props.match.params.id}
            />
          )}
        />
        <Route path="/sponsorship" component={Sponsorship}></Route>
        <Route path="/profile/:name" component={Profile}></Route>
      </Switch>
    </section>
  );
}

export default Section
