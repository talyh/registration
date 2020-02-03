import React from "react";
import styled from "styled-components";
import colors from "../../../colors";

interface ISubmitButtonProps {
  children: React.ReactNode;
  onClick?: (arg0: React.MouseEvent) => void;
  disabled?: boolean;
}

const MessagePopButton = ({
  children,
  onClick,
  disabled
}: ISubmitButtonProps) => (
  <Button onClick={ev => onClick && onClick(ev)} disabled={disabled}>
    {children}
  </Button>
);

const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: ${colors.button.onMessagePop.text};
  background-color: ${colors.button.onMessagePop.background};
  padding: 5px;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  outline: none;

  :hover {
    color: ${colors.button.onMessagePop.hover.text};
    background-color: ${colors.button.onMessagePop.hover.background};
  }

  :disabled {
    background-color: ${colors.button.onMessagePop.disabled.background};
    color: ${colors.button.onMessagePop.disabled.text};
  }
`;

export default MessagePopButton;
