import React, { useState } from "react";
import Home from "./components/templates/Home";
import Login from "./components/templates/Login";
import Register from "./components/templates/Register";
import Logout from "./components/templates/Logout";
import "./components/atoms/firebase";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/logowanie" component={Login} />
        <Route exact path="/rejestracja">
          <Register setUser={setUser} />
        </Route>
        <Route exact path="/wylogowano" component={Logout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
