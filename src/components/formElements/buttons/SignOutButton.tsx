import React from "react";
import styled from "styled-components";
import colors from "../../../colors";

interface ISignOutButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const SignOutButton = ({ onClick, disabled }: ISignOutButtonProps) => (
  <Button onClick={() => onClick && onClick()} disabled={disabled}>
    Sign Out
  </Button>
);

const Button = styled.button`
  font-size: 14px;
  color: ${colors.button.transparent.text};
  background-color: ${colors.button.transparent.background};
  padding: 5px;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  margin-right: 40px;
  border: none;

  :hover {
    color: ${colors.button.transparent.hover.text};
  }

  :disabled {
    color: ${colors.button.transparent.disabled.text};
  }
`;

export default SignOutButton;
