import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import MessagePopButton from "./formElements/buttons/MessagePopButton";
import colors from "../colors";

interface IConfirmationMessage {
  type: "feedback"; // TODO - add others as needed (confirmationRequest, error, etc, and adjust component accordingly)
  message: string;
  onConfirm: () => void;
}

const MessagePop = ({ message, onConfirm }: IConfirmationMessage) => {
  return (
    <ScreenOverlay>
      <Container>
        <IconContainer>
          <FontAwesomeIcon icon={faCheckCircle} />
        </IconContainer>
        <MessageContainer>{message}</MessageContainer>
        <ButtonContainer>
          <MessagePopButton>Ok</MessagePopButton>
        </ButtonContainer>
      </Container>
    </ScreenOverlay>
  );
};

const ScreenOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.messagePop.screenbackground};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 300px;
  padding: 40px;
  background-color: ${colors.messagePop.feedback.background};
  animation: 0.25s ease-in 0s 1 animateIn;

  @keyframes animateIn {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    80% {
      transform: scale(110%);
    }
    100% {
      transform: scale(100%);
      opacity: 100%;
    }
  }
`;

const IconContainer = styled.div`
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 52px;
  color: ${colors.messagePop.feedback.text};
`;

const MessageContainer = styled.div`
  flex: 2 1 auto;
  color: ${colors.messagePop.feedback.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  flex: 1 1 auto;
`;

export default MessagePop;
