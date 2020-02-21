import React from "react";
import styled from "styled-components";
import { Field, useField } from "react-final-form";
import { FormArea, Label, ErrorMessage } from "../formElements";
import colors from "../../colors";

interface IDropdownProps {
  name: string;
  label: string;
  values: Array<string | number>;
  required?: boolean;
}

export const Dropdown = ({
  name,
  label,
  values,
  required = false
}: IDropdownProps) => {
  const { meta } = useField(name);
  return (
    <FormArea active={meta.active} error={meta.error}>
      <Label required={required} htmlFor={name} display="above">
        {label}
      </Label>
      <FormField name={name} component="select">
        {!required && <option value="">----Select a value----</option>}
        {values.map(value => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </FormField>
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
  background-color: ${colors.dropdown.background};
`;
