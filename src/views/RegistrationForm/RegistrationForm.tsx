import React, { useContext } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { AuthContext, IAuthContext } from "../../AuthContext";

const RegistrationForm = () => {
  const { uid, user } = useContext(AuthContext) as IAuthContext;

  const checkIfAuthenticated = (uid: string): boolean => uid !== "";
  const renderPage = () => <div>Hello {user?.name}</div>;
  const redirectToSignIn = () => <Redirect to="/signin" />;

  if (checkIfAuthenticated(uid)) {
    return renderPage();
  } else {
    return redirectToSignIn();
  }
};

export default RegistrationForm;
