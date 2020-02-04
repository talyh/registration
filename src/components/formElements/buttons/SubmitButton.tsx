import React from "react";
import styled from "styled-components";
import Spinner from "../../Spinner";
import colors from "../../../colors";

interface ISubmitButtonProps {
  onClick?: (arg0: React.MouseEvent) => void;
  disabled?: boolean;
  text?: string;
  submitting?: boolean;
}

const SubmitButton = ({
  onClick,
  disabled,
  text = "Submit",
  submitting = false
}: ISubmitButtonProps) => (
  <Button
    onClick={ev => onClick && onClick(ev)}
    type="submit"
    disabled={disabled}
  >
    <Label>{text}</Label>
    {submitting && <Spinner display="inline" size="small" color="dark" />}
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

const Label = styled.span`
  flex: 2 1 auto;
`;

export default SubmitButton;
