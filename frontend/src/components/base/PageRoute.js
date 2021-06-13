import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Handpose from "../handpose/Handpose";

const PageRoute = ({ userInfo }) => {
  return (
    <Switch>
      <Route exact path="/">
        Homepage
      </Route>
      <Route exact path="/handpose" component={Handpose}></Route>
    </Switch>
  );
};

export default PageRoute;
