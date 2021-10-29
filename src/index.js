import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ShowroomPage from "views/ShowroomPage/ShowroomPage.js";
import ContactPage from "views/ContactPage/ContactPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/Components" component={Components} />
      <Route path="/showroom-page" component={ShowroomPage} />
      <Route path="/aboutus-page" component={AboutUsPage} />
      <Route path="/contact-page" component={ContactPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
