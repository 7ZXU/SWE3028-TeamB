import { useState } from "react";
import React from "react";
import Template from "./Components/Template";
import { MdAddCircle } from "react-icons/md";
import "./App.css"
import ChallengeBack from "./Components/ChallengeBack";



const App = () => {

  const [challenges] = useState([
    {id: 1,done: true,state: true,checked: true, cert: true},
    {id: 2,done: true,state: true,checked: true, cert: true},
    {id: 3,done: false,state: true,checked: true, cert: true},
    {id: 4,done: true,state: true,checked: true, cert: true},
    {id: 5,done: true,state: true,checked: true, cert: true},
    {id: 6,done: false,state: true,checked: true, cert: true},
    {id: 7,done: true,state: true,checked: true, cert: true},
    {id: 8,done: true,state: true,checked: true, cert: true},
    {id: 9,done: false,state: true,checked: false, cert: true},
    {id: 10,done: true,state: true,checked: true, cert: true},
    {id: 11,done: true,state: true,checked: true, cert: true},
    {id: 12,done: false,state: true,checked: true, cert: true},
    {id: 13,done: true,state: true,checked: true, cert: true},
    {id: 14,done: true,state: true,checked: true, cert: true},
    {id: 15,done: false,state: true,checked: true, cert: false},
    {id: 16,done: true,state: true,checked: false, cert: false},
    {id: 17,done: true,state: false,checked: false, cert: false},
    {id: 18,done: false,state: false,checked: false, cert: false},
    {id: 19,done: true,state: false,checked: true, cert: false},
    {id: 20,done: true,state: false,checked: false, cert: false},
    {id: 21,done: false,state: false,checked: false, cert: false},
    {id: 22,done: true,state: false,checked: true, cert: false},
    {id: 23,done: true,state: false,checked: false, cert: false},
    {id: 24,done: false,state: false,checked: false, cert: false},
    {id: 25,done: true,state: false,checked: true, cert: false},
    {id: 26,done: true,state: false,checked: false, cert: false},
    {id: 27,done: false,state: false,checked: false, cert: false},
    {id: 28,done: true,state: false,checked: true, cert: false},
    {id: 29,done: true,state: false,checked: false, cert: false},
    {id: 30,done: false,state: false,checked: false, cert: false}
  ]);

  return <Template Myname = '곽무진' days = {challenges} Yourname = '곽진무' days2 = {challenges}>
  </Template>; 
};

export default App;
