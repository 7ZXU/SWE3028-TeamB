import { useState } from "react";
import React from "react";
import Template from "./components/Template";
import Todolist from "./components/TodoList";
import { MdAddCircle } from "react-icons/md";
import "./App.css"
import ChallengeBack from "./components/ChallengeBack";



const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }
  ]);

  const [challenges] = useState([
    {id: 1,done: true,state: true,checked: true},
    {id: 2,done: true,state: true,checked: true},
    {id: 3,done: false,state: true,checked: true},
    {id: 4,done: true,state: true,checked: true},
    {id: 5,done: true,state: true,checked: true},
    {id: 6,done: false,state: true,checked: true},
    {id: 7,done: true,state: true,checked: true},
    {id: 8,done: true,state: true,checked: true},
    {id: 9,done: false,state: true,checked: false},
    {id: 10,done: true,state: true,checked: true},
    {id: 11,done: true,state: true,checked: true},
    {id: 12,done: false,state: true,checked: true},
    {id: 13,done: true,state: true,checked: true},
    {id: 14,done: true,state: true,checked: true},
    {id: 15,done: false,state: true,checked: true},
    {id: 16,done: true,state: true,checked: false},
    {id: 17,done: true,state: false,checked: false},
    {id: 18,done: false,state: false,checked: false},
    {id: 19,done: true,state: false,checked: true},
    {id: 20,done: true,state: false,checked: false},
    {id: 21,done: false,state: false,checked: false},
    {id: 22,done: true,state: false,checked: true},
    {id: 23,done: true,state: false,checked: false},
    {id: 24,done: false,state: false,checked: false},
    {id: 25,done: true,state: false,checked: true},
    {id: 26,done: true,state: false,checked: false},
    {id: 27,done: false,state: false,checked: false},
    {id: 28,done: true,state: false,checked: true},
    {id: 29,done: true,state: false,checked: false},
    {id: 30,done: false,state: false,checked: false}
  ]);

  return <Template todoLength={todos.length} Myname = '곽무진' days = {challenges} Yourname = '곽진무' days2 = {challenges}>
    <Todolist todos = {todos}/>
  </Template>; 
};

export default App;
