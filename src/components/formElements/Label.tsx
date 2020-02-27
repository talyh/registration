import React from "react";
import styled from "styled-components";
import colors from "../../colors";

interface ILabelProps {
  htmlFor: string;
  required?: boolean;
  display: "above" | "inline";
}

export const Label = styled.label<ILabelProps>`
  padding: 0px 10px;
  background-color: ${colors.formLabel.background};
  position: ${props => props.display === "above" && "absolute"};
  top: ${props => props.display === "above" && "-5px"};
  left: ${props => props.display === "above" && "20px"};
  height: ${props => props.display === "inline" && "50px"};
  display: ${props => props.display === "inline" && "flex"};
  align-items: ${props => props.display === "inline" && "center"};

  ::after {
    content: ${props => props.required && `" *"`};
    color: ${colors.formLabel.required};
  }
`;
