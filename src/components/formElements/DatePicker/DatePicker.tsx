import React from "react";
import styled from "styled-components";
import DatePickerElement from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useField } from "react-final-form";
import { FormArea, Label, ErrorMessage } from "../../formElements";
import { useCustomStyleVariables } from "./hooks";
import "./styles.css";
import colors from "../../../colors";

interface IDatePickerProps {
  label: string;
  name: string;
  required?: boolean;
}

export const DatePicker = ({
  label,
  name,
  required = false
}: IDatePickerProps) => {
  const today = new Date();
  const maxDate = today;
  maxDate.setFullYear(today.getFullYear() - 10);
  const { input, meta } = useField(name);

  // because the datePicker library doesn't work with styled components,
  // we need to inject the color variables in a different way
  useCustomStyleVariables();

  return (
    <FormArea active={meta.active} error={meta.visited && meta.error}>
      <Label required={required} htmlFor={name} display="above">
        {label}
      </Label>
      <DatePickerContainer>
        <DatePickerElement
          selected={input.value}
          onChange={input.onChange}
          onFocus={input.onFocus}
          onBlur={input.onBlur}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          maxDate={maxDate}
          dateFormat="dd/MM/yyyy"
          calendarClassName="calendar"
          wrapperClassName="wrapper"
          className="input"
        />
      </DatePickerContainer>
      <ErrorMessage name={name} />
    </FormArea>
  );
};

const DatePickerContainer = styled.div`
  width: 100%;
  margin: 0px 5px;
  padding: 10px 20px 0px 20px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  border: thin solid ${colors.datePicker.container.border};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.datePicker.container.background};
`;
