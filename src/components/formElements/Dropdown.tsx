import React from "react";
import styled from "styled-components";
import { Field, useField } from "react-final-form";
import { FormArea, Label, ErrorMessage } from "../formElements";
import colors from "../../colors";

interface IDropdownProps {
  name: string;
  label: string;
  values: Array<string | number>;
  valuesLabels?: Array<string>;
  required?: boolean;
  conditional?: boolean;
}

export const Dropdown = ({
  name,
  label,
  values,
  valuesLabels,
  required = false,
  conditional = false
}: IDropdownProps) => {
  const { meta } = useField(name);
  console.log(`${name} meta: `, meta);
  return (
    <FormArea
      active={meta.active}
      error={meta.visited && meta.error}
      conditional={conditional}
    >
      <Label required={required} htmlFor={name} display="above">
        {label}
      </Label>
      <FormField name={name} component="select">
        <option value="">----Select a value----</option>
        {values.map((value, index) => (
          <option value={value} key={value}>
            {valuesLabels && valuesLabels.length === values.length
              ? valuesLabels[index]
              : value}
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
