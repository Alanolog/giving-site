import React from "react";
import Home from "./components/templates/Home";
import Login from "./components/templates/Login";
import Register from "./components/templates/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/logowanie" component={Login} />
        <Route exact path="/rejestracja" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
