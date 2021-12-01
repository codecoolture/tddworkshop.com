import { Field as FormikField, useFormikContext } from "formik";
import React, { createContext, useContext } from "react";
import { TextField } from "../../../../components/TextField";

const FieldContext = createContext({ name: "" });

export function Field(props: { children: React.ReactNode; name: string }) {
  const { errors } = useFormikContext<Record<string, unknown>>();

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

Field.Error = function FieldError(props: { children: React.ReactNode }) {
  const { name } = useContext(FieldContext);
  const { errors } = useFormikContext<Record<string, unknown>>();

  const error = errors[name];

  if (undefined === error) {
    return null;
  }

  return <TextField.Error>{props.children}</TextField.Error>;
};
