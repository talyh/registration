import React from "react";
import { useField } from "react-final-form";
import styled from "styled-components";

interface IConditionProps {
  baseField: string; // field to watch
  compare: (fieldValue: any) => boolean; // if this function returns true, condition is met
  children: React.ReactNode; // content to render if condition is met
}

export const Condition = ({
  baseField,
  compare,
  children
}: IConditionProps) => {
  const { input } = useField(baseField);
  return <Container>{compare(input.value) ? children : null}</Container>;
};

const Container = styled.div`
  width: 98%;
`;
