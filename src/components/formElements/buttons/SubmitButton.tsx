import React from "react";
import styled from "styled-components";
import colors from "../../../colors";

interface ISubmitButtonProps {
  children: React.ReactNode;
  onClick?: (arg0: React.MouseEvent) => void;
  disabled?: boolean;
}

const SubmitButton = ({ children, onClick, disabled }: ISubmitButtonProps) => (
  <Button
    onClick={ev => onClick && onClick(ev)}
    type="submit"
    disabled={disabled}
  >
    {children}
  </Button>
);

const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: ${colors.button.normal.text};
  background-color: ${colors.button.normal.background};
  padding: 5px;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  outline: none;

  :hover {
    box-shadow: ${colors.button.normal.hover.boxShadowOutset} 0px 0px 5px,
      inset ${colors.button.normal.hover.boxShadowInset} 0px -1px 5px;
    color: ${colors.button.normal.hover.text};
  }

  :disabled {
    background-color: ${colors.button.normal.disabled.background};
    color: ${colors.button.normal.disabled.text};
  }
`;

export default SubmitButton;
