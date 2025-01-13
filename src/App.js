import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import FormPage from "./components/FormPage";
import FetchUserPage from "./components/FetchUserPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/form" component={FormPage} />
        <Route path="/fetch-user" component={FetchUserPage} />
      </Switch>
    </Router>
  );
}

export default App;
