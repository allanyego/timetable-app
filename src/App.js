import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { Sidebar } from "primereact/sidebar";
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";

import "./App.css";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <TMenuBar />
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

function TMenuBar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(null);

  function wrapSidebar(tabName) {
    setCurrentTab(tabName);
    setSideBarOpen(true);
  }

  function renderSwitch(param) {
    switch (param) {
      case "subject":
        return <form>For subject</form>;
      case "teacher":
        return <form>For teacher</form>;
      case "stream":
        return <form>For stream</form>;
      case "class":
        return <form>For class</form>;
      case "lesson":
        return <form>For lesson</form>;
      default:
        setSideBarOpen(false);
        break;
    }
  }

  const menuModel = [
    {
      label: "Schedule",
      icon: "pi pi-table",
    },
    {
      label: "Resources",
      icon: "pi pi-plus",
      items: [
        {
          label: "Subject",
          icon: "pi pi-folder",
          command: () => wrapSidebar("subject"),
        },
        {
          label: "Teacher",
          icon: "pi pi-user",
          command: () => wrapSidebar("teacher"),
        },
        {
          label: "Stream",
          icon: "pi pi-pause",
          command: () => wrapSidebar("stream"),
        },
        {
          label: "Class",
          icon: "pi pi-file",
          command: () => wrapSidebar("class"),
        },
        {
          label: "Lesson",
          icon: "pi pi-clock",
          command: () => wrapSidebar("lesson"),
        },
      ],
    },
  ];
  return (
    <Menubar
      model={menuModel}
      start={
        <div className="p-d-flex p-ai-center">
          <i className="pi pi-calendar-plus" style={{ fontSize: "2em" }} />
          <h4 className="p-m-0">Timetable App</h4>
          <Sidebar visible={sideBarOpen} onHide={() => setSideBarOpen(false)}>
            {sideBarOpen && renderSwitch(currentTab)}
          </Sidebar>
        </div>
      }
    />
  );
}
