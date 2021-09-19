import React from "react";
import Home from "./components/templates/Home";
import Login from "./components/templates/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/logowanie">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
