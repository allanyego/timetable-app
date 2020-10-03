import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { FullCalendar } from "primereact/fullcalendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./Dashboard.css";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setEvents([
        {
          title: "math",
          startTime: "08:00",
          duration: "00:40",
        },
        {
          title: "eng",
          startTime: "08:40",
          duration: "00:40",
        },
        {
          title: "eng",
          startTime: "09:20",
          duration: "00:40",
        },
        {
          title: "kis",
          startTime: "08:00",
          duration: "00:40",
        },
        {
          title: "eng",
          startTime: "08:40",
          duration: "00:40",
        },
        {
          title: "eng",
          startTime: "09:20",
          duration: "00:40",
        },
        {
          title: "kis",
          startTime: "08:00",
          duration: "00:40",
        },
        {
          title: "eng",
          startTime: "08:40",
          duration: "00:40",
        },
        {
          title: "eng",
          startTime: "09:20",
          duration: "00:40",
        },
        {
          title: "eng",
          startTime: "09:20",
          duration: "00:40",
        },
      ]);
    }, 2000);
  }, []);

  const options = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    // defaultView: "dayGridWeek",
    // defaultDate: new Date(),
    // header: {
    //   left: "prev,next",
    //   center: "title",
    //   right: "dayGridMonth,timeGridWeek,timeGridDay",
    // },
  };

  return (
    <div>
      <Dialog
        header="Header"
        visible={this.state.displayBasic}
        style={{ width: "50vw" }}
        footer={this.renderFooter("displayBasic")}
        onHide={() => this.onHide("displayBasic")}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </Dialog>
      <Card>
        <FullCalendar events={events} options={options} />
      </Card>
    </div>
  );
}
