import React from "react";
import styled from "styled-components";
import { Field, useField } from "react-final-form";
import { FormArea, Label, ErrorMessage } from "../formElements";
import colors from "../../colors";

interface IInputProps {
  name: string;
  type?: string;
  placeholder?: string;
  label: string;
  required?: boolean;
  parse?: any;
  maxLength?: number;
  component?: "input" | "textarea";
  conditional?: boolean;
}

export const Input = ({
  name,
  type = "text",
  placeholder,
  label,
  required = false,
  parse,
  maxLength,
  component = "input",
  conditional = false
}: IInputProps) => {
  const { meta } = useField(name);

  return (
    <FormArea
      active={meta.active}
      error={meta.visited && meta.error}
      conditional={conditional}
    >
      <Label required={required} htmlFor={name} display="above">
        {label}
      </Label>
      <FormField
        name={name}
        placeholder={placeholder}
        type={type}
        parse={parse}
        component={component}
        maxLength={maxLength}
      />
      <ErrorMessage name={name} />
    </FormArea>
  );
};

const FormField = styled(Field)`
  width: 100%;
  margin: 0px 5px;
  padding: 10px 20px 0px 20px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  border: thin solid ${colors.textField.border};
  height: 50px;
`;
