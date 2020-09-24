import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";

import FieldHelp from "./FieldHelp";

const subjectSchema = Yup.object({
  firstName: Yup.string().required("Enter first name.").min(2, "Too short.").max(75, "Too long."),
  middleName: Yup.string(),
  lastName: Yup.string().required("Enter last name.").min(2, "Too short.").max(75, "Too long."),
  email: Yup.string().email("Enter a valid email.").required("Enter user email."),
  title: Yup.string().required("Select appropriate title."),
  username: Yup.string().required("Enter a username."),
  gender: Yup.string().oneOf(["male", "female"]).required("Select user gender."),
});

const titles = [
  {
    label: "Mrs",
    value: "mr",
  },
  {
    label: "Mrs",
    value: "mrs",
  },
  {
    label: "Ms",
    value: "ms",
  },
  {
    label: "Dr",
    value: "dr",
  },
  {
    label: "Prof",
    value: "prof",
  },
];

export default function TeacherForm() {
  return (
    <div>
      <h2>Add teacher</h2>
      <Formik validationSchema={subjectSchema} onSubmit={console.log} initialValues={{}}>
        {({ handleChange, handleBlur, values, errors, isValid, isSubmitting }) => (
          <Form noValidate>
            <div className="p-fluid p-formgrid p-grid">
              <div className="p-field p-fluid p-col-3">
                <label htmlFor="title">Title</label>
                <Dropdown
                  name="title"
                  options={titles}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Select a title"
                />
                <FieldHelp errors={errors} fieldName="title" id="title" />
              </div>
              <div className="p-field p-fluid p-col-9">
                <label htmlFor="firstName">First name</label>
                <InputText
                  id="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.firstName ? "p-invalid" : ""}
                />
                <FieldHelp errors={errors} fieldName="firstName" id="firstName" />
              </div>
            </div>
            <div className="p-field p-fluid">
              <label htmlFor="middleName">Middle name</label>
              <InputText
                id="middleName"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.middleName ? "p-invalid" : ""}
              />
              <FieldHelp errors={errors} fieldName="middleName" id="middleName" />
            </div>

            <div className="p-field p-fluid">
              <label htmlFor="lastName">Last name</label>
              <InputText
                id="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.lastName ? "p-invalid" : ""}
              />
              <FieldHelp errors={errors} fieldName="lastName" id="lastName" />
            </div>
            <div className="p-field p-fluid">
              <label htmlFor="username">Preferred username</label>
              <InputText
                id="username"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.username ? "p-invalid" : ""}
              />
              <FieldHelp errors={errors} fieldName="username" id="username" />
            </div>
            <div className="p-field p-fluid">
              <label htmlFor="email">Email</label>
              <InputText
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email ? "p-invalid" : ""}
              />
              <FieldHelp errors={errors} fieldName="email" id="email" />
            </div>
            <div className="p-formgroup-inline">
              <div className="p-field-radiobutton">
                <RadioButton
                  inputId="femaleRadio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.gender && values.gender == "female"}
                />
                <label htmlFor="femaleRadio">Female</label>
              </div>
              <div className="p-field-radiobutton">
                <RadioButton
                  inputId="maleRadio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.gender && values.gender == "male"}
                />
                <label htmlFor="maleRadio">Male</label>
              </div>
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
