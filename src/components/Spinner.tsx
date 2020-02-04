import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import colors from "../colors";

interface ISpinnerProps {
  size?: "small" | "large";
  display?: "pageCenter" | "inline";
  color?: "light" | "dark";
}

const Spinner = ({
  size = "large",
  display = "pageCenter",
  color = "light"
}: ISpinnerProps) => (
  <Container display={display}>
    <AnimatedSpinner size={size} color={color}>
      <FontAwesomeIcon icon={faSpinner} />
    </AnimatedSpinner>
  </Container>
);

const Container = styled.div<ISpinnerProps>`
  position: ${props => props.display === "pageCenter" && "absolute"};
  display: flex;
  flex: ${props => props.display === "inline" && "1 1 20px"};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const AnimatedSpinner = styled.div<ISpinnerProps>`
  font-size: ${props => (props.size === "large" ? "60px" : "20px")};
  color: ${props =>
    props.color === "light" ? colors.spinner.light : colors.spinner.dark};
  animation: spin infinite 2s linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
