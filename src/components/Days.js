import React from 'react';
import {MdCheckBox,MdCheckBoxOutlineBlank} from "react-icons/md";
import "./Days.css"

const Days = ({day}) => {
    const {id,done,checked} = day;
    return (
        <div className="ChallengeDays">
        <div className={'content ${checked ? "checked" : ""}'}>
            {done ? <MdCheckBox size="30"/> : <MdCheckBoxOutlineBlank size="30"/>}
        </div>
        </div>
    );
};

export default Days;