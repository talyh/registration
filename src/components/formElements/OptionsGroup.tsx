import React from "react";
import styled from "styled-components";
import { Field, useField } from "react-final-form";
import { FormArea, Label, ErrorMessage } from "../formElements";

interface IOptionGroupProps {
  name: string;
  label: string;
  height?: string;
  valuesArray: Array<number>;
  required: boolean;
  shouldDisable?: (arg: number) => boolean;
}

const Option = ({ name, option, shouldDisable }: any) => (
  <CheckBoxAsButton key={option}>
    <label>
      <Field
        name={name}
        component="input"
        type="checkbox"
        value={option}
        disabled={shouldDisable ? shouldDisable(option) : false}
      />
      <span>{option}</span>
    </label>
  </CheckBoxAsButton>
);

export const OptionsGroup = ({
  name,
  label,
  valuesArray,
  required = false,
  height,
  shouldDisable
}: IOptionGroupProps) => {
  const { meta } = useField(name);

  return (
    <FormArea height={height} error={meta.error}>
      <Label required={required} style={{ top: 0 }}>
        {label}
      </Label>
      <CheckBoxAsButtonGroup>
        {valuesArray.map(option => (
          <Option
            key={option}
            option={option}
            name={name}
            shouldDisable={shouldDisable}
          />
        ))}
        <ErrorMessage name={name} />
      </CheckBoxAsButtonGroup>
    </FormArea>
  );
};

const CheckBoxAsButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 20px;
`;

const CheckBoxAsButton = styled.div`
  margin: 4px;
  background-color: #efefef;
  border: 1px solid #d0d0d0;
  overflow: auto;
  float: left;

  label {
    float: left;
    width: 4em;
  }

  label span {
    text-align: center;
    padding: 3px 0px;
    display: block;
  }

  label input {
    display: none;
  }

  input:checked + span {
    background-color: #2569c0;
    color: #ffffff;
  }

  :hover {
    color: #ffffff;
    background-color: #68c025;
  }
`;
