import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { Sidebar } from "primereact/sidebar";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import SubjectForm from "./components/SubjectForm";
import TeacherForm from "./components/TeacherForm";
import LessonForm from "./components/LessonForm";
import ClassForm from "./components/ClassForm";
import StreamForm from "./components/StreamForm";

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
        return <SubjectForm />;
      case "teacher":
        return <TeacherForm />;
      case "stream":
        return <StreamForm />;
      case "class":
        return <ClassForm />;
      case "lesson":
        return <LessonForm />;
      default:
        return setSideBarOpen(false);
    }
  }

  const menuModel = [
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
