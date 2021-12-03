import { Field as FormikField, Form, Formik } from "formik";
import React from "react";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import { Button } from "../../../../components/Button";
import { Field } from "./Field";

export function ContactForm({ children, onSuccessMessage }: { children: React.ReactNode; onSuccessMessage: string }) {
  return (
    <Formik
      initialValues={{
        "form-name": "contact",

        doNotWriteIfHuman: "",
        email: "",
        message: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        await fetch("/", {
          body: new URLSearchParams(values).toString(),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "POST",
        });

        toast.success(onSuccessMessage, {
          duration: 5000,
          className: "Page__ContactForm__Toast",
        });

        resetForm();
      }}
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
      validationSchema={yup.object({
        email: yup.string().email().required(),
      })}
    >
      {() => {
        return (
          <Form name="contact" className="Page__ContactForm" data-netlify="true" netlify-honeypot="doNotWriteIfHuman">
            <FormikField name="form-name" type="hidden" />

            <FormikField name="doNotWriteIfHuman" type="hidden" />

            {children}
          </Form>
        );
      }}
    </Formik>
  );
}

ContactForm.Submit = function ContactFormSubmit({ children }: { children: string }) {
  return (
    <Button variant="solid" className="Page__ContactForm__Submit" type="submit">
      {children}
    </Button>
  );
};

ContactForm.Field = Field;
