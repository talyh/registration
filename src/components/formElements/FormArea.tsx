import React from "react";
import styled from "styled-components";

interface IFormAreaProps {
  error?: boolean;
  active?: boolean;
  height?: string;
}

export const FormArea = styled.div<IFormAreaProps>`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: ${props => {
    if (props.active) {
      return "#2569c0";
    } else if (props.error) {
      return "#c02549";
    } else {
      return "#a4a4a4";
    }
  }};
  background-color: ${props => {
    if (props.active) {
      return "#2569c0";
    } else if (props.error) {
      return "#c02549";
    }
  }};
  height: ${props => props.height || "70px"};
`;
