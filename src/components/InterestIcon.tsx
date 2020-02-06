import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import colors from "../colors";

interface IInterestIconProps {
  label: string;
  icon: IconDefinition;
}

const InterestIcon = ({ label, icon }: IInterestIconProps) => (
  <Container>
    <IconContainer>
      <FontAwesomeIcon icon={icon} />
    </IconContainer>
    <Label>{label}</Label>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 160px;
  width: 180px;
  color: ${colors.interestIcon.text};
  background-color: ${colors.interestIcon.background};
  margin: 20px;
  padding: 0px 20px;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: ${colors.interestIcon.hover.background};
  }
`;

const IconContainer = styled.div`
  font-size: 50px;
`;

const Label = styled.div`
  font-size: 20px;
`;

export default InterestIcon;
