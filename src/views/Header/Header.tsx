import React from "react";
import styled from "styled-components";
import { useStore } from "./hooks";
import SignOutButton from "../../components/formElements/buttons/SignOutButton";
import colors from "../../colors";

// TODO - review to determine best way to implement redirect after signOut
const Header = () => {
  const { signOut, loading } = useStore();

  return (
    <StyledHeader>
      <Title>TOJam {`${new Date().getFullYear()}`} Registration</Title>
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
