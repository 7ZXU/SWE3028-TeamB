import React from 'react';
import "./Template.css";
import Challperson from "./Challperson";
import Days from "./Days";
import Cert from "./ChallengeCert";
import { useState } from "react";

const Template = ({children, Myname, days, Yourname, days2, todoLength}) => {
    const [insertToggle, setInsertToggle] = useState(false);
    const onInsertToggle = () => {
        setInsertToggle(prev => !prev);
      };

    return (
        <div className='Template'>
            <div className='ChallengeName'>Challenge name</div>
            <div className= "Template1">
                <div className='Myname'><div className='Name' onClick={onInsertToggle}> Me: {Myname}
                    {insertToggle && <Challperson onInsertToggle={onInsertToggle}/>}
                    </div>
                <div className='Challenge-days'>
                    {days.map(day => (<Days day = {day} key={day.id} />))}
                </div>
                </div>

                <div className='Myname'><div className='Name' onClick={onInsertToggle}> Mate: {Yourname}
                    {insertToggle && <Challperson onInsertToggle={onInsertToggle}/>}
                    </div>

                <div className='Challenge-days'>
                    {days2.map(day => (<Days day = {day} key={day.id} />))}
                </div>
                </div>
            </div>

            <div className= "Template2">
                <div className='title'>Todo list({todoLength})</div>
                <div>{children}</div>
            </div>

            <div className= "Template3">
                <div className='title'>Certification({todoLength})</div>
                <Cert/>
            </div>
        </div>
    );
};

export default Template;