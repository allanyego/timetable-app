import React from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import FieldHelp from "../components/FieldHelp";
import { signIn } from "../http/Users";
import State from "../state";

const loginSchema = Yup.object({
  username: Yup.string().required("Enter you username."),
  password: Yup.string().required("Enter your password."),
});

export default function SignIn() {
  const history = useHistory();
  const handleSubmit = async (values, { setSubmitting }) => {
    const user = await signIn(values.username.trim(), values.password);
    State.user = user;
    setSubmitting(false);
    history.push("/dashboard");
  };

  return (
    <div>
      <h1 className="p-text-center">Sign in</h1>
      <div className="p-grid p-justify-center">
        <div className="p-col-4">
          <Card>
            <Formik validationSchema={loginSchema} onSubmit={handleSubmit} initialValues={{}}>
              {({ handleChange, handleBlur, errors, touched, isValid, isSubmitting }) => (
                <Form noValidate>
                  <div className="p-field p-fluid">
                    <label htmlFor="username">Username</label>
                    <InputText
                      id="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.username ? "p-invalid" : ""}
                    />
                    <FieldHelp errors={errors} fieldName="username" id="username" />
                  </div>
                  <div className="p-field p-fluid">
                    <label htmlFor="password">Password</label>
                    <InputText
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.password ? "p-invalid" : ""}
                    />
                    <FieldHelp errors={errors} fieldName="password" id="password" />
                  </div>
                  <div className="p-d-flex p-jc-end">
                    <Button
                      label="Sign in"
                      disabled={!isValid || isSubmitting}
                      icon={`pi ${isSubmitting ? "pi-spin pi-spinner" : "pi-sign-in"}`}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </Card>
        </div>
      </div>
    </div>
  );
}
