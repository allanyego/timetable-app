import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import FieldHelp from "./FieldHelp";
import { InputTextarea } from "primereact/inputtextarea";

const subjectSchema = Yup.object({
  name: Yup.string().required("Enter subject name."),
  description: Yup.string().min(5, "Too short.").max(150, "Too long."),
});

export default function SubjectForm() {
  return (
    <div>
      <h2>Add subject</h2>
      <Formik validationSchema={subjectSchema} onSubmit={console.log} initialValues={{}}>
        {({ handleChange, handleBlur, errors, isValid, isSubmitting }) => (
          <Form noValidate>
            <div className="p-field p-fluid">
              <label htmlFor="name">Name</label>
              <InputText
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name ? "p-invalid" : ""}
              />
              <FieldHelp errors={errors} fieldName="name" id="name" />
            </div>
            <div className="p-field p-fluid">
              <label htmlFor="description">Description</label>
              <InputTextarea
                id="description"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.description ? "p-invalid" : ""}
              />
              <FieldHelp errors={errors} fieldName="description" id="description" />
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
