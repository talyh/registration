import React from "react";
import styled from "styled-components";
import colors from "../../colors";

interface IFormAreaProps {
  error?: boolean;
  active?: boolean;
  height?: string;
}

export const FormArea = styled.div<IFormAreaProps>`
  width: 98%;
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0px;
  color: ${props => {
    if (props.active) {
      return colors.formArea.text.highlight;
    } else if (props.error) {
      return colors.formArea.text.error;
    } else {
      return colors.text.primary;
    }
  }};
  background-color: ${props => {
    if (props.active) {
      return colors.formArea.background.highlight;
    } else if (props.error) {
      return colors.formArea.background.error;
    }
  }};
  height: ${props => props.height || "70px"};
`;
