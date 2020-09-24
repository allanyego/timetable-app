import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";

import FieldHelp from "./FieldHelp";

const classSchema = Yup.object({
  level: Yup.number()
    .required("Select grade level.")
    .min(1, "Exceeds grade level.")
    .max(6, "Exceeds grade level."),
  stream: Yup.string().required("Select the class stream."),
  classTeacher: Yup.string().required("Select the class teacher."),
});

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

const streams = [
  {
    name: "green",
  },
  {
    name: "blue",
  },
  {
    name: "yellow",
  },
];

export default function ClassForm() {
  return (
    <div>
      <h2>Add class</h2>
      <Formik validationSchema={classSchema} onSubmit={console.log} initialValues={{}}>
        {({ handleChange, handleBlur, errors, isValid, isSubmitting }) => (
          <Form noValidate>
            <div className="p-field p-fluid">
              <label htmlFor="level">Class level</label>
              <InputText
                id="level"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.level ? "p-invalid" : ""}
              />
              <FieldHelp errors={errors} fieldName="level" id="level" />
            </div>
            <div className="p-field p-fluid">
              <label htmlFor="stream">Stream</label>
              <Dropdown
                name="stream"
                options={streams}
                optionLabel="name"
                filter
                showClear
                filterBy="name"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Select a stream"
              />
              <FieldHelp errors={errors} fieldName="stream" id="stream" />
            </div>
            <div className="p-field p-fluid">
              <label htmlFor="classTeacher">Class teacher</label>
              <Dropdown
                name="classTeacher"
                options={teachers}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Select class teacher"
              />
              <FieldHelp errors={errors} fieldName="classTeacher" id="classTeacher" />
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
      </Formik>
    </div>
  );
}
