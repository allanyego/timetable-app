import React from "react";

export default function FieldHelp({ fieldName, errors, ...rest }) {
  return errors[fieldName] ? (
    <small className="p-invalid p-d-block" {...rest}>
      {errors[fieldName]}
    </small>
  ) : null;
}
