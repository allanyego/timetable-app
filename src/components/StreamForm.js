import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import FieldHelp from "./FieldHelp";

const streamSchema = Yup.object({
  name: Yup.string().required("Enter stream name."),
});

export default function StreamForm() {
  return (
    <div>
      <h2>Add stream</h2>
      <Formik validationSchema={streamSchema} onSubmit={console.log} initialValues={{}}>
        {({ handleChange, handleBlur, errors, isValid, isSubmitting }) => (
          <Form noValidate>
            <div className="p-field p-fluid">
              <label htmlFor="name">Stream name</label>
              <InputText
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name ? "p-invalid" : ""}
              />
              <FieldHelp errors={errors} fieldName="name" id="name" />
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
