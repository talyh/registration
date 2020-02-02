import React from "react";
import styled from "styled-components";
import SignOutButton from "./formElements/buttons/SignOutButton";
import colors from "../colors";

const Header = () => (
  <StyledHeader>
    <Title>TOJam {`${new Date().getFullYear()}`} Registration</Title>
    <SignOutButton />
  </StyledHeader>
);

const StyledHeader = styled.header`
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Title = styled.div`
  margin-left: 40px;
  color: ${colors.text.highlight};
  font-family: "Bowlby One SC", cursive;
  font-size: 24px;
  text-transform: uppercase;
`;

export default Header;
