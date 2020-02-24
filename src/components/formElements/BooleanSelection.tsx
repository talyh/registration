import React from "react";
import styled from "styled-components";
import { Field, useField } from "react-final-form";
import { FormArea, Label, ErrorMessage } from "../formElements";

interface IBooleanSelectionProps {
  name: string;
  label: string;
}

export const BooleanSelection = ({ name, label }: IBooleanSelectionProps) => {
  const { meta } = useField(name);
  return (
    <FormArea active={meta.active} error={meta.visited && meta.error}>
      <Container>
        <Label htmlFor={name} display="inline">
          {label}
        </Label>
        <Field name={name} component="input" type="checkbox" />
      </Container>
      <ErrorMessage name={name} />
    </FormArea>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0px 5px;
  padding: 10px 20px 0px 20px;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
`;
