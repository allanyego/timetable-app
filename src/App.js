import React from "react";
import { Menubar } from "primereact/menubar";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

const menuModel = [
  {
    label: "Sign in",
    icon: "pi pi-sign-in",
  },
];

function App() {
  return (
    <div className="App">
      <Menubar
        model={menuModel}
        start={
          <div className="p-d-flex p-ai-center">
            <i className="pi pi-calendar-plus" style={{ fontSize: "2em" }} />
            <h4 className="p-m-0">Timetable</h4>
          </div>
        }
      />
      <Router>
        <Switch>
          <Route path="/signin" exact component={SignIn} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="*" render={() => <Redirect to="/signin" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
