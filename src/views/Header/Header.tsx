import React from "react";
import styled from "styled-components";
import { useStore } from "./hooks";
import SignOutButton from "../../components/formElements/buttons/SignOutButton";
import colors from "../../colors";
import { jamName } from "../../jamConfig";

const Header = () => {
  const { signOut, loading } = useStore();

  return (
    <StyledHeader>
      <Title>{jamName} Registration</Title>
      <SignOutButton onClick={signOut} disabled={loading} />
    </StyledHeader>
  );
};

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
