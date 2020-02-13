import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { Form } from "react-final-form";
import { useStore } from "./hooks";
import { parsePhone } from "../../utils";
import {
  Input,
  OptionsGroup,
  FormSection
} from "../../components/formElements/";
import SubmitButton from "../../components/formElements/buttons/SubmitButton";
import MessagePop from "../../components/MessagePop";
import Spinner from "../../components/Spinner";
import * as formValues from "../../jamConfig";
import routes from "../../router/routes";

const RegistrationForm = () => {
  const { uid, user, loading, saving, saveUser } = useStore();

  // TODO - this should probably be a Util, especially considering token validation
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
  const submit = async (data: IUser) => {
    await saveUser(uid, data);
  };

  const renderPage = () => {
    return (
      <FormContainer>
        <Form
          initialValues={user as IUser}
          onSubmit={submit}
          validate={validate}
          render={({ errors, handleSubmit, submitting, submitSucceeded }) => (
            <form onSubmit={handleSubmit}>
              <FormSection label="The Basics">
                <Input
                  label="Name"
                  name="name"
                  placeholder="Shun Li"
                  required
                />
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
              </FormSection>
              <OptionsGroup
                name="jamsAttended"
                label="Jams Attended"
                valuesArray={formValues.jamsAttended}
                required
                shouldDisable={(option: number) =>
                  option === new Date().getFullYear()
                }
                height="100px"
              />
              <ButtonContainer>
                <SubmitButton
                  disabled={
                    submitting || saving || Object.keys(errors).length > 0
                  }
                  text="Submit"
                  submitting={submitting || saving}
                />
              </ButtonContainer>
              {submitSucceeded && !saving && (
                <MessagePop
                  type="feedback"
                  message="Registration Submitted Sucessfully!"
                  // TODO - Need to better understand user flow to determine what to do here
                  onConfirm={() => {}}
                />
              )}
            </form>
          )}
        />
      </FormContainer>
    );
  };
  const redirectToSignIn = () => <Redirect to={routes.signIn} />;

  if (checkIfAuthenticated(uid)) {
    if (loading) {
      return <Spinner />;
    }
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
