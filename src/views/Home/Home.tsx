import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleCarry,
  faQuestion,
  faVideo,
  faGamepad
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import colors from "../../colors";
import { jamName } from "../../jamConfig";

const Home = () => (
  <Container>
    <Intro>{`Hi there! What are you intersted in for ${jamName}?`}</Intro>
    <InterestIconsContainer>
      <Link to="/registration">
        <InterestIcon>
          <IconContainer>
            <FontAwesomeIcon icon={faGamepad} />
          </IconContainer>
          <Label>Jammer</Label>
        </InterestIcon>
      </Link>
      <a
        href={`mailto:goat@tojam.ca?Subject=[TOJam ${new Date().getFullYear()}] - Volunteer`}
      >
        <InterestIcon>
          <IconContainer>
            <FontAwesomeIcon icon={faPeopleCarry} />
          </IconContainer>
          <Label>Volunteer</Label>
        </InterestIcon>
      </a>
      <a
        href={`mailto:goat@tojam.ca?Subject=[TOJam ${new Date().getFullYear()}] - Media Inquiry`}
      >
        <InterestIcon>
          <IconContainer>
            <FontAwesomeIcon icon={faVideo} />
          </IconContainer>
          <Label>Media</Label>
        </InterestIcon>
      </a>
      <a
        href={`mailto:goat@tojam.ca?Subject=[TOJam ${new Date().getFullYear()}] - General Inquiry`}
      >
        <InterestIcon>
          <IconContainer>
            <FontAwesomeIcon icon={faQuestion} />
          </IconContainer>
          <Label>General Inquiry</Label>
        </InterestIcon>
      </a>
    </InterestIconsContainer>
  </Container>
);

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Intro = styled.div`
  margin: 40px;
  color: ${colors.text.highlight};
  font-size: 40px;
`;

const InterestIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  a {
    text-decoration: none;
  }
`;

const InterestIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 160px;
  width: 180px;
  color: ${colors.interestIcon.text};
  background-color: ${colors.interestIcon.background};
  margin: 20px;
  padding: 0px 20px;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: ${colors.interestIcon.hover.background};
  }
`;

const IconContainer = styled.div`
  font-size: 50px;
`;

const Label = styled.div`
  font-size: 20px;
`;

export default Home;
