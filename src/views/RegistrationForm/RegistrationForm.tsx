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
    const addCurrentJam = (errors: any) => {
      if (errors.hasOwnProperty("customJam")) {
        return errors;
      }

      return { ...errors, currentJam: {} };
    };
    const addParticipation = (errors: any) => {
      if (
        errors.hasOwnProperty("customJam") &&
        errors.customJam.hasOwnProperty("participation")
      ) {
        return errors;
      }

      return {
        ...errors,
        currentJam: { participation: {}, ...errors.currentJam }
      };
    };

    let errors: any = {};
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
      errors = addCurrentJam(errors);
      errors.currentJam.gbRoom = "Required";
    }
    if (values.currentJam && !values.currentJam.participation.type) {
      errors = addParticipation(errors);
      errors.currentJam.participation.type = "Required";
    }
    if (
      values.currentJam?.participation &&
      !values.currentJam.participation.hardwareNeeded
    ) {
      errors = addParticipation(errors);
      errors.currentJam.participation.hardwareNeeded = "Required";
    }
    if (
      values.currentJam?.participation &&
      !(values.currentJam.participation as any).role
    ) {
      errors = addParticipation(errors);
      errors.currentJam.participation.role = "Required";
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
          render={({
            errors,
            handleSubmit,
            submitting,
            submitSucceeded,
            values
          }) => (
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
                  shouldDisable={option => option === new Date().getFullYear()}
                  height="100px"
                />

                {/* If Solo, the Role is necessarily Programmer, and can ask for Floaters, and can't be Remote */}
                {/* If Team, the Role can be any of the available for Team, can ask for Floaters, and can be Remote */}
                {/* If Floater, the Role can be any of the available for Floater, can't ask for Floaters, and can't be Remote */}
                <Dropdown
                  label="I'll be participating as"
                  name="currentJam.participation.type"
                  values={formValues.participation}
                  required
                />
                <Condition
                  baseField="currentJam.participation.type"
                  compare={(value: string) =>
                    value !== "" && value !== formValues.ParticipationType.Team
                  }
                >
                  <Dropdown
                    label="Doing"
                    name="currentJam.participation.role"
                    values={
                      // @ts-ignore - Even though the key strings are the same, TS didn't like converting
                      formValues.roles[values.currentJam.participation.type]
                    }
                    required
                    conditional
                  />
                </Condition>
                <Condition
                  baseField="currentJam.participation.type"
                  compare={(value: string) =>
                    value !== "" && value.search(/(Floater)/gm) < 0
                  }
                >
                  <OptionsGroup
                    label="Floaters Needed"
                    name="currentJam.participation.floatersNeeded"
                    valuesArray={formValues.floatersRequest}
                    optionsWidth="wide"
                    height="100px"
                  />
                  <Input
                    label="Game Idea"
                    name="currentJam.participation.gameIdea"
                    component="textarea"
                    conditional
                  />
                </Condition>
                {/* <Condition
                  baseField="currentJam.participation.type"
                  compare={(value: string) =>
                    value === formValues.ParticipationType.Team
                  }
                >
                         <BooleanSelection label="Remote" name="currentJam.participation.remote" />
                </Condition> */}

                <Dropdown
                  label="I'll bring"
                  name="currentJam.participation.hardwareNeeded"
                  values={Object.keys(formValues.hardwareNeeded)}
                  valuesLabels={Object.values(formValues.hardwareNeeded)}
                  required
                />

                {/* gbRoom is only available for gbStudents */}
                <BooleanSelection
                  label="I'm a GB Student at this campus!"
                  name="currentJam.gbStudent"
                />
                <Condition
                  baseField="currentJam.gbStudent"
                  compare={(fieldValue: boolean) => fieldValue}
                >
                  <Dropdown
                    label="I'll use this GB Room"
                    name="currentJam.gbRoom"
                    values={formValues.gbRoom}
                    required
                    conditional
                  />
                </Condition>
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
              <div>{JSON.stringify(errors)}</div>
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
