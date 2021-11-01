import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Calendar from "../components/Calendar";
import Friends from "../components/Friends";
import CheckboxList from "../components/CheckboxList";
import Thumbnail from "../components/Thumbnail";
import ChallengeCard from "../components/ChallengeCard";
const FeedWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 200px 200px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CalendarWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: space-around;
`;

const User = styled.text`
  font-size: 50px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CheckboxListWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 20%;

`;

const ChallengeWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 20%;

`;
const Plus = styled.button`
  background: transparent;
  border: none;
  font-size: 100px;
  text-align: center;


`;

const Login = styled(AccountCircleIcon)``;

function FeedPage() {
  const [user, setUser] = useState("김지수");
  const SLIDE_COUNT = 10;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <FeedWrap>
      <Header>
        <Friends />

        <Login sx={{ fontSize: 50 }}>login</Login>
      </Header>
      <Body>
        <CalendarWrap>
          <User>{user}</User>
          <Calendar />
          {/* <Slide></Slide> */}
          <Link to="/feed/image">
            <Thumbnail slides={slides} num={3} />
          </Link>
        </CalendarWrap>
        <CheckboxListWrap>
          <h1>Todo</h1>
          <CheckboxList />
        </CheckboxListWrap>
        <ChallengeWrap>
          <h1>Challenge</h1>
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <Link to="/challenges">
          <Plus>+</Plus>
          </Link>
        </ChallengeWrap>
      </Body>
    </FeedWrap>
  );
}

export default FeedPage;
