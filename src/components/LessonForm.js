import React, { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

import FieldHelp from "./FieldHelp";

const lessonSchema = Yup.object({
  day: Yup.string().required("Select day of week."),
  slots: Yup.mixed().required("Select 1 > lesson slots."),
  teacher: Yup.string().required("Select the lesson teacher."),
  class: Yup.string().required("Select a class."),
});

const days = [
  {
    name: "monday",
  },
  {
    name: "tuesday",
  },
  {
    name: "wednesday",
  },
  {
    name: "thursday",
  },
  {
    name: "friday",
  },
];

const teachers = [
  {
    name: "andrew ng",
  },
  {
    name: "tom brady",
  },
  {
    name: "luke shore",
  },
];

const classes = [
  {
    level: 1,
    stream: "blue",
  },
  {
    level: 2,
    stream: "green",
  },
  {
    level: 3,
    stream: "yellow",
  },
];

const slots = [
  {
    name: "1",
  },
  {
    name: "2",
  },
  {
    name: "3",
  },
  {
    name: "4",
  },
  {
    name: "5",
  },
  {
    name: "6",
  },
  {
    name: "7",
  },
  {
    name: "8",
  },
  {
    name: "9",
  },
  {
    name: "10",
  },
];

const CLIENT_ID = "628309068506-6jmio10r67b0m1uebspfd1hapv4v9fhu.apps.googleusercontent.com";
const CLIENT_SECRET = "ROLmIItUUANftlDBaaMCn_h7";
const API_KEY = "AIzaSyDXWyeAFTflrsl7lyOhicUUSFeVFUlj0LY";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

function classOptionItem(option, props) {
  return (
    <div>
      {option.level} - {option.stream}
    </div>
  );
}

function selectedClassOptionItem(option, props) {
  if (option) {
    return classOptionItem(option, props);
  }

  return <div>{props.placeholder}</div>;
}

function selectedDayOption(option, props) {
  console.log(option);
  if (option) {
    return <div>{option.name}</div>;
  }
  return <div>{props.placeholder}</div>;
}

function dayOption(option, props) {
  return <div>{option.name}</div>;
}

export default function LessonForm() {
  function initClient() {
    window.gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(() => {
        console.log("Calendar init.");
      });
  }
  /**
   * Print the summary and start datetime/date of the next ten events in
   * the authorized user's calendar. If no events are found an
   * appropriate message is printed.
   */
  function listUpcomingEvents() {
    console.log("Calendar api was called", window.gapi);
    window.gapi.load("client:auth2", initClient);
    // window.gapi.client.calendar.events
    //   .list({
    //     calendarId: "primary",
    //     timeMin: new Date().toISOString(),
    //     showDeleted: false,
    //     singleEvents: true,
    //     maxResults: 10,
    //     orderBy: "startTime",
    //   })
    //   .then(function (response) {
    //     const events = response.result.items;
    //     console.log(events);
    //     // appendPre("Upcoming events:");

    //     // if (events.length > 0) {
    //     //   for (i = 0; i < events.length; i++) {
    //     //     var event = events[i];
    //     //     var when = event.start.dateTime;
    //     //     if (!when) {
    //     //       when = event.start.date;
    //     //     }
    //     //     console.log(event.summary + " (" + when + ")");
    //     //   }
    //     // } else {
    //     //   console.log("No upcoming events found.");
    //     // }
    //   });
  }

  useEffect(() => {
    listUpcomingEvents();
  }, []);

  return (
    <div>
      <h2>Add lesson</h2>
      <Formik
        validationSchema={lessonSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("VALUES", values);
          setTimeout(() => setSubmitting(false), 1500);
        }}
        initialValues={{}}
      >
        {({ handleChange, handleBlur, values, errors, isValid, isSubmitting }) => (
          <Form noValidate>
            <div className="p-field p-fluid">
              <label htmlFor="day">Day of week</label>
              <Dropdown
                id="day"
                name="day"
                value={values.day}
                options={days}
                optionLabel="name"
                optionValue="name"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Select a day"
              />
              <FieldHelp errors={errors} fieldName="day" id="day" />
            </div>
            <div className="p-field p-fluid">
              <label htmlFor="slots">Slots</label>
              <MultiSelect
                id="slots"
                name="slots"
                value={values.slots}
                options={slots}
                optionLabel="name"
                optionValue="name"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Select a slot"
              />
              <FieldHelp errors={errors} fieldName="slots" id="slots" />
            </div>
            <div className="p-field p-fluid">
              <label htmlFor="teacher">Teacher</label>
              <Dropdown
                id="teacher"
                name="teacher"
                value={values.teacher}
                options={teachers}
                optionLabel="name"
                optionValue="name"
                filter
                showClear
                filterBy="name"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Select lesson teacher"
              />
              <FieldHelp errors={errors} fieldName="teacher" id="teacher" />
            </div>
            <div className="p-field p-fluid">
              <label htmlFor="class">Class</label>
              <Dropdown
                id="class"
                name="class"
                value={values.class}
                options={classes}
                optionLabel="level"
                optionValue="level"
                filter
                showClear
                filterBy="level,stream"
                itemTemplate={classOptionItem}
                valueTemplate={selectedClassOptionItem}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Select a stream"
              />
              <FieldHelp errors={errors} fieldName="class" id="class" />
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <div className="p-d-flex p-jc-between">
              <Button label="Cancel" className="p-button-secondary" />
              <Button
                type="submit"
                label="Add"
                disabled={!isValid || isSubmitting}
                icon={`pi ${isSubmitting ? "pi-spin pi-spinner" : "pi-sign-in"}`}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
