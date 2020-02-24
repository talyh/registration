import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { Form } from "react-final-form";
import { useStore } from "./hooks";
import { parsePhone } from "../../utils";
import {
  FormSection,
  Input,
  OptionsGroup,
  Dropdown,
  BooleanSelection,
  DatePicker,
  Condition
} from "../../components/formElements/";
import SubmitButton from "../../components/formElements/buttons/SubmitButton";
import MessagePop from "../../components/MessagePop";
import Spinner from "../../components/Spinner";
import * as formValues from "../../jamConfig";
import routes from "../../router/routes";
import { User } from "../../typings/User";

const RegistrationForm = () => {
  const { uid, user, loading, saving, saveUser } = useStore();

  // TODO - this should probably be a Util, especially considering token validation
  const checkIfAuthenticated = (uid: string): boolean => uid !== "";
  const validate = (values: User) => {
    const errors: any = { currentJam: {} };

    console.log("errors", errors);
    console.log(values);
    console.log(
      "hardware needed error",
      values.currentJam && !values.currentJam.hardwareNeeded
    );
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (values.jamsAttended && values.jamsAttended.length < 1) {
      errors.jamsAttended = "Required";
    }
    if (values.phone && values.phone.length !== 14) {
      errors.phone = "Ivalid Phone";
    }
    if (!values.birthDate) {
      errors.birthDate = "Required";
    }
    if (
      values.currentJam &&
      values.currentJam.gbStudent &&
      !values.currentJam.gbRoom
    ) {
      errors.currentJam.gbRoom = "Required";
    }
    if (values.currentJam && !values.currentJam.hardwareNeeded) {
      errors.currentJam.hardwareNeeded = "Required";
    }
    if (values.currentJam && !values.currentJam.role) {
      errors.currentJam.role = "Required";
    }
    return errors;
  };
  const submit = async (user: User) => {
    await saveUser(uid, user);
  };

  const renderPage = () => {
    return (
      <FormContainer>
        <Form
          initialValues={user as User}
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
                  label="Nickname"
                  name="nickname"
                  placeholder="ShunLiDKwin"
                  maxLength={12}
                />
                <Input
                  label="Phone"
                  name="phone"
                  parse={parsePhone}
                  placeholder="(555) 555-5555"
                />
                <Dropdown
                  label="Ocupation"
                  name="occupation"
                  values={formValues.ocuppation}
                />
                <Input
                  label="Company"
                  name="company"
                  placeholder="Street Fighter Inc."
                />
                <Input
                  label="Website"
                  name="website"
                  type="url"
                  placeholder="http://www.shunli.ca"
                />
                <DatePicker label="BirthDate" name="birthDate" required />
              </FormSection>
              <FormSection label="Jam Participation">
                {/* TODO - This selection probably only makes sense for the first year, to capture some historical data 
                (ie. is this a veteran or not, but there's no point in presenting this field every year) */}
                <OptionsGroup
                  label="Jams Attended"
                  name="jamsAttended"
                  valuesArray={formValues.jamsAttended}
                  required
                  shouldDisable={(option: number) =>
                    option === new Date().getFullYear()
                  }
                  height="100px"
                />
                <BooleanSelection
                  label="I'm a GB Student at this campus!"
                  name="currentJam.gbStudent"
                />
                <Condition when="currentJam.gbStudent" is={true}>
                  <Dropdown
                    label="I'll use this GB Room"
                    name="currentJam.gbRoom"
                    values={formValues.gbRoom}
                    required
                    conditional
                  />
                </Condition>
                <Dropdown
                  label="I'll bring"
                  name="currentJam.hardwareNeeded"
                  values={Object.keys(formValues.hardwareNeeded)}
                  valuesLabels={Object.values(formValues.hardwareNeeded)}
                  required
                />
                <Dropdown
                  label="I'm a"
                  name="currentJam.role"
                  values={formValues.roles}
                  required
                />
                {
                  // TODO IMMEDIATE - ADD Programmer path
                  // TODO IMMEDIATE 2 - ADD Floater path
                  // TODO IMMEDIATE 3 = ADD Team path
                  // role Programmer, Artist, Designer, Sound
                  // selection Individual / Team / Floater
                  // if Individual
                  //     Floaters Needed [multiselect]
                  // if Team
                  //
                  //
                  // if Floater
                  //     <all good>
                }
                {/* Add Team with roles and Floaters stuff */}
              </FormSection>
              <FormSection label="Finally">
                <BooleanSelection
                  label="I'll have a toddler visting me!"
                  name="currentJam.babyComing"
                />
                <Dropdown
                  label="Choose one"
                  name="currentJam.rage"
                  values={formValues.rage}
                />
                <Input
                  label="Comments"
                  name="currentJam.comments"
                  component="textarea"
                />
              </FormSection>
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
