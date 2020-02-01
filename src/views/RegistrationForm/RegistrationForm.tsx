import React, { useContext } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { Form } from "react-final-form";
import { Input, OptionsGroup } from "../../components/formElements/";
import { AuthContext, IAuthContext } from "../../AuthContext";
import SubmitButton from "../../components/formElements/buttons/SubmitButton";
import { parsePhone, saveUserData } from "../../utils";

const RegistrationForm = () => {
  const { uid, user, setUser } = useContext(AuthContext) as IAuthContext;

  const checkIfAuthenticated = (uid: string): boolean => uid !== "";
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (values.jamsAttended.length < 1) {
      errors.jamsAttended = "Required";
    }
    if (values.phone && values.phone.length !== 14) {
      errors.phone = "Ivalid Phone";
    }
    return errors;
  };

  const renderPage = () => {
    return (
      <FormContainer>
        <Form
          initialValues={user as IUser}
          onSubmit={async (data: IUser) => {
            await saveUserData(uid, data);
            setUser(data);
          }}
          validate={validate}
          render={({ errors, handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <Input label="Name" name="name" placeholder="Shun Li" required />
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="shunLi@streetFighter.com"
                required
              />
              <Input
                label="Phone"
                name="phone"
                parse={parsePhone}
                placeholder="(555) 555-5555"
              />
              <OptionsGroup
                name="jamsAttended"
                label="Jams Attended"
                valuesArray={[
                  2020,
                  2018,
                  2017,
                  2016,
                  2015,
                  2014,
                  2013,
                  2012,
                  2011,
                  2010,
                  2009,
                  2008
                ]}
                required
                shouldDisable={(option: number) =>
                  option === new Date().getFullYear()
                }
                height="100px"
              />
              <ButtonContainer>
                <SubmitButton
                  disabled={submitting || Object.keys(errors).length > 0}
                >
                  Submit
                </SubmitButton>
              </ButtonContainer>
            </form>
          )}
        />
      </FormContainer>
    );
  };
  const redirectToSignIn = () => <Redirect to="/signin" />;

  if (checkIfAuthenticated(uid)) {
    return renderPage();
  } else {
    return redirectToSignIn();
  }
};

const FormContainer = styled.div`
  width: 96%;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export default RegistrationForm;
