import React from "react";
import styled from "styled-components";
import colors from "../../colors";

interface IFormSectionProps {
  label: string;
  children: React.ReactNode;
}

export const FormSection = ({ label, children }: IFormSectionProps) => (
  <Container label={label}>
    <Label>{label}</Label>
    {children}
  </Container>
);

const Container = styled.div<IFormSectionProps>`
  border: thin solid ${colors.formSection.container.border};
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const Label = styled.label`
  text-transform: uppercase;
  position: absolute;
  text-align: center;
  top: -15px;
  padding: 0px 15px;
  background-color: ${colors.formSection.label.background};
  color: ${colors.formSection.label.text};
  font-size: 18px;
  font-weight: bold;
`;
