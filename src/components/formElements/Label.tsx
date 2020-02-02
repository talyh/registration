import React from "react";
import styled from "styled-components";

interface ILabelProps {
  required?: boolean;
}

export const Label = styled.label<ILabelProps>`
  position: absolute;
  background-color: #ffffff;
  top: -5px;
  left: 20px;
  padding: 0px 10px;

  ::after {
    content: ${props => props.required && `" *"`};
    color: #c02549;
  }
`;
