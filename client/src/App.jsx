import React from "react";
import { Switch, Route } from "react-router-dom";
import form from "./Form";
import View from "./View";
import Edit from "./Edit";

import sign from "./Signup";
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/form" component={form}></Route>
        <Route exact path="/" component={View} />
        <Route path="/sign" component={sign} />
        <Route path="/edit" component={Edit} />
      </Switch>
    </>
  );
};
export default App;
