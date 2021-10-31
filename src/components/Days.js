import React from 'react';
import {MdCheckBox,MdCheckBoxOutlineBlank} from "react-icons/md";
import "./Days.css"
import "./Template"

const Days = ({day, key,onChangetodo,cert}) => {
    const {id,done,checked,state} = day;



    return (
        <div className="ChallengeDays" key = {id} cert = {cert} >
        <div className={'content ${checked ? "checked" : ""}'}>
        {state && done && checked && <MdCheckBoxOutlineBlank size="30" color="green" />  }
        {!state && <MdCheckBoxOutlineBlank size="30" color="gray" />}
        {state && !checked && <MdCheckBoxOutlineBlank size="30" color="yellow" />}
        {state && checked &&! done && <MdCheckBoxOutlineBlank size="30" color="red" />}
        </div>
        </div>
    );
};

export default Days;