import React from 'react';
import {MdCheckBox,MdCheckBoxOutlineBlank} from "react-icons/md";
import "./Days.css"

const Days = ({day}) => {
    const {id,done,checked,state} = day;
    
    return (
        <div className="ChallengeDays">
        <div className={'content ${checked ? "checked" : ""}'}>
        {state && done && checked && <MdCheckBoxOutlineBlank size="30" color="green"/>}
        {!state && <MdCheckBoxOutlineBlank size="30" color="gray"/>}
        {state && !checked && <MdCheckBoxOutlineBlank size="30" color="yellow"/>}
        {state && checked &&! done && <MdCheckBoxOutlineBlank size="30" color="red"/>}
        </div>
        </div>
    );
};

export default Days;

/*{done ? <MdCheckBox size="30"/> : <MdCheckBoxOutlineBlank size="30"/>} */