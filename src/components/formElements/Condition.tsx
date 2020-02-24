import React from "react";
import { useField } from "react-final-form";
import styled from "styled-components";

interface IConditionProps {
  when: string; // field to watch
  is: string | number | boolean; // value to watch
  children: React.ReactNode; // content to render if condition is met
}

export const Condition = ({ when, is, children }: IConditionProps) => {
  const { input } = useField(when);

  return <Container>{input.value === is ? children : null}</Container>;
};

const Container = styled.div`
  width: 98%;
`;
