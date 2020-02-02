import React from "react";
import styled from "styled-components";
import colors from "../../colors";

interface ILabelProps {
  required?: boolean;
}

export const Label = styled.label<ILabelProps>`
  position: absolute;
  background-color: ${colors.formLabel.background};
  top: -5px;
  left: 20px;
  padding: 0px 10px;

  ::after {
    content: ${props => props.required && `" *"`};
    color: ${colors.formLabel.required};
  }
`;
