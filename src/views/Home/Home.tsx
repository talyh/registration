import React from "react";
import styled from "styled-components";
import {
  faPeopleCarry,
  faQuestion,
  faVideo,
  faGamepad
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import InterestIcon from "../../components/InterestIcon";
import colors from "../../colors";
import { jamName } from "../../jamConfig";

const Home = () => (
  <Container>
    <Intro>{`Hi there! What are you interested in for ${jamName}?`}</Intro>
    <InterestIconsContainer>
      <Link to="/registration">
        <InterestIcon label="Jammer" icon={faGamepad} />
      </Link>
      <a
        href={`mailto:goat@tojam.ca?Subject=[TOJam ${new Date().getFullYear()}] - Volunteer`}
      >
        <InterestIcon label="Volunteer" icon={faPeopleCarry} />
      </a>
      <a
        href={`mailto:goat@tojam.ca?Subject=[TOJam ${new Date().getFullYear()}] - Media Inquiry`}
      >
        <InterestIcon label="Media" icon={faVideo} />
      </a>
      <a
        href={`mailto:goat@tojam.ca?Subject=[TOJam ${new Date().getFullYear()}] - General Inquiry`}
      >
        <InterestIcon label="General Inquiry" icon={faQuestion} />
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

export default Home;
