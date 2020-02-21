import React from "react";
import { useField } from "react-final-form";
import styled from "styled-components";

interface IConditionProps {
  when: string;
  is: string | number | boolean;
  children: React.ReactNode;
}

export const Condition = ({ when, is, children }: IConditionProps) => {
  const { input } = useField(when);

  return <Container>{input.value === is ? children : null}</Container>;
};

const Container = styled.div`
  width: 98%;
`;
