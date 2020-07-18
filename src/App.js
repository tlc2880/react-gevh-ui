import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Houses from "./pages/Houses";
import SingleHouse from "./pages/SingleHouse";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/houses/" component={Houses} />
        <Route exact path="/houses/:slug" component={SingleHouse} />
        <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
