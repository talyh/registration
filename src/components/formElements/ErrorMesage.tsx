import React from "react";
import styled from "styled-components";
import { useField } from "react-final-form";

export const ErrorMessage = ({ name }: any) => {
  const {
    meta: { touched, error }
  } = useField(name, { subscription: { touched: true, error: true } });
  return touched && error ? (
    <StyledErrorMessage>{error}</StyledErrorMessage>
  ) : null;
};

const StyledErrorMessage = styled.div`
  position: absolute;
  right: 2vw;
  background: #c02549;
  color: #ffffff;
  animation: 0.5s ease-in-out 0s 1 animateIn;
  padding: 5px 10px;
  align-self: center;

  @keyframes animateIn {
    0% {
      opacity: 0;
      background-color: #2569c0;
      transform: translateX(0);
    }
    30% {
      transform: translateX(-1.5vw);
    }
    50% {
      transform: translateX(3vw);
    }
    70% {
      transform: translateX(-3.5vw);
    }
    90% {
      transform: translateX(5vw);
    }
    100% {
      transform: translateX(0);
    }
`;
