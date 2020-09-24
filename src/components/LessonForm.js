import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputText } from "primereact/inputtext";
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

function ClassOptionItem(option, props) {
  return (
    <div>
      {option.level} - {option.stream}
    </div>
  );
}

function SelectedClassOptionItem(option, props) {
  if (option) {
    return (
      <div>
        {option.level} - {option.stream}
      </div>
    );
  }

  return <span>{props.placeholder}</span>;
}

function SelectedItem(option, props) {
  console.log(option);
  return <>"Rupper duppa"</>;
}

function OptionItem(option, props) {
  if (option) {
    return <div>{option.name} - 2345</div>;
  }

  return <span>{props.placeholder}</span>;
}

const countries = [
  { name: "Australia", code: "AU" },
  { name: "Brazil", code: "BR" },
  { name: "China", code: "CN" },
  { name: "Egypt", code: "EG" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "India", code: "IN" },
  { name: "Japan", code: "JP" },
  { name: "Spain", code: "ES" },
  { name: "United States", code: "US" },
];

function selectedCountryTemplate(option, props) {
  if (option) {
    return (
      <div className="country-item country-item-value">
        <img
          alt={option.name}
          src="showcase/demo/images/flag_placeholder.png"
          className={`flag flag-${option.code.toLowerCase()}`}
        />
        <div>{option.name}</div>
      </div>
    );
  }

  return <span>{props.placeholder}</span>;
}

function countryOptionTemplate(option) {
  return (
    <div className="country-item">
      <img
        alt={option.name}
        src="showcase/demo/images/flag_placeholder.png"
        className={`flag flag-${option.code.toLowerCase()}`}
      />
      <div>{option.name}</div>
    </div>
  );
}

export default function LessonForm() {
  const [selectedCountry, setSelectedCountry] = useState(undefined);

  const onCountryChange = (e) => {
    setSelectedCountry(e.value);
  };
  return (
    <div>
      <h2>Add lesson</h2>
      {/* <Formik
        validationSchema={lessonSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("VALUES", values);
          setTimeout(() => setSubmitting(false), 1500);
        }}
        initialValues={{}}
      >
        {({ handleChange, handleBlur, errors, isValid, isSubmitting }) => (
          <Form noValidate>
            <div className="p-field p-fluid">
              <label htmlFor="day">Day of week</label>
              <Dropdown
                id="day"
                name="day"
                value="day"
                options={days}
                optionLabel="name"
                optionValue="name"
                onChange={(e) => setDay(e.value)}
                valueTemplate={SelectedItem}
                itemTemplate={OptionItem}
                placeholder="Select a day"
              />
              <FieldHelp errors={errors} fieldName="day" id="day" />
            </div>
            <div className="p-field p-fluid">
              <label htmlFor="slots">Slots</label>
              <MultiSelect
                id="slots"
                name="slots"
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
                options={classes}
                optionLabel="level"
                optionValue="level"
                filter
                showClear
                filterBy="level,stream"
                itemTemplate={ClassOptionItem}
                valueTemplate={SelectedClassOptionItem}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Select a stream"
              />
              <FieldHelp errors={errors} fieldName="class" id="class" />
            </div>
            <div className="p-d-flex p-jc-between">
              <Button label="Cancel" className="p-button-secondary" />
              <Button
                label="Add"
                disabled={!isValid || isSubmitting}
                icon={`pi ${isSubmitting ? "pi-spin pi-spinner" : "pi-sign-in"}`}
              />
            </div>
          </Form>
        )}
      </Formik> */}

      <h5>Advanced with Templating, Filtering and Clear Icon</h5>
      <Dropdown
        value={selectedCountry}
        options={countries}
        onChange={onCountryChange}
        optionLabel="name"
        filter
        showClear
        filterBy="name"
        placeholder="Select a Country"
        valueTemplate={selectedCountryTemplate}
        itemTemplate={countryOptionTemplate}
      />
    </div>
  );
}
