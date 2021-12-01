import { Field as FormikField, FormikValues, useFormikContext } from "formik";
import React, { createContext, useContext } from "react";
import { TextField } from "../../../../components/TextField";

const FieldContext = createContext({ name: "" });

export function Field<Values extends FormikValues>(props: { children: React.ReactNode; name: keyof Values }) {
  const { errors } = useFormikContext<Values>();

  const error = errors[props.name];

  if (undefined !== error && typeof error !== "string") {
    throw new Error(`ERROR: Unsupported error type: ${JSON.stringify(error, null, 2)}`);
  }

  return (
    <FieldContext.Provider value={{ name: props.name.toString() }}>
      <TextField error={error}>{props.children}</TextField>
    </FieldContext.Provider>
  );
}

Field.Label = function FieldLabel({ children }: { children: string }) {
  return <TextField.Label>{children}</TextField.Label>;
};

Field.Hint = function FieldHint({ children }: { children: React.ReactNode }) {
  return <TextField.Hint>{children}</TextField.Hint>;
};

Field.Input = function FieldInput() {
  const { name } = useContext(FieldContext);

  return <FormikField as={TextField.Input} name={name} />;
};
