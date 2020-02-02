import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { AuthContext, IAuthContext } from "../../../AuthContext";
import colors from "../../../colors";

const SignOutButton = () => {
  const { setUid, setUser } = useContext(AuthContext) as IAuthContext;
  const history = useHistory();

  const signOut = async () => {
    // clean local token and state
    await localStorage.removeItem("userToken");
    setUid("");
    setUser(null);

    // navigate back to login page
    history.replace("/");
  };

  return <Button onClick={signOut}>Sign Out</Button>;
};

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
