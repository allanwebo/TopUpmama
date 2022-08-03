import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import RestrictedRoute from "./Auth/RestrictedRoute";
import PrivateRoute from "./Auth/PrivateRoute";
import Home from "./Components/Home";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import user from "./Components/user";
import update from "./Components/update";
function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <RestrictedRoute exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/user" component={user} />
        <Route exact path="/update" component={update} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
