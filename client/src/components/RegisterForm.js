import React, { useEffect, useState } from "react";
import InputText from './InputText';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Button = styled.button`
  cursor: pointer;
  width: 100%;
  border: 2px solid #000000;
  color: #ffffff;
  background: #000000;
  outline: none;
  border-radius: 10px;
  line-height: 2.5rem;
  font-size: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 1.5rem;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

const Aligner = styled.div`
  margin-top: 10px;
  text-align: right;
`;

const StyledLink = styled.p`
  color: #888888;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;

function RegisterForm({ to }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const typeId = (e) =>{
    setId(e.target.value);
  }
  const typePw = (e) =>{
    setPw(e.target.value)
  }

  const registerRequest = ()=>{
    const post ={
      usrId : id,
      usrPassword : pw
    };
    
    fetch("http://localhost:5000/Register", {
      mode: 'cors',
      method : "POST",
      headers : {
        "Content-type" : "application/json",
      },
      body : JSON.stringify(post),
    })
    .then((res)=>res.json())
    .then((json)=>{
      this.setState({
        testbody : json.text,
      });
    });
  };
  return (
    <>
      <InputText name="email" placeholder="ID" onChange={typeId }/>
      <InputText name="password" placeholder="PW" type="password"  onChange={typePw}  />
      <InputText name="password" placeholder="Check PW" type="password" />
      <Link to={to}>
        <Button onClick = {registerRequest}>회원가입</Button>
      </Link>
      <Aligner>{/* <StyledLink>로그인 하기</StyledLink> */}</Aligner>
    </>
  );
}

export default RegisterForm;
