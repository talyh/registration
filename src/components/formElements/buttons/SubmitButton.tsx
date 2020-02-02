import React from "react";
import styled from "styled-components";

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
  font-size: 14px;
  color: white;
  background-color: #2569c0;
  padding: 5px;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  cursor: pointer;
  outline: none;

  :hover {
    box-shadow: rgb(45, 52, 142, 0.3) 0px 0px 5px,
      inset rgba(45, 52, 142, 0.5) 0px -1px 5px;
    color: rgb(225, 225, 255, 1);
  }

  :disabled {
    background-color: #ffffff;
    color: #2569c0;
  }
`;

export default SubmitButton;
