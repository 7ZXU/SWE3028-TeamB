import React from 'react';
import "./ChallengeCert.css";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import ChallengeBack from "./ChallengeBack";

const Cert = () => {
    const [insertToggle, setInsertToggle] = useState(false);
    const onInsertToggle = () => {
        setInsertToggle(prev => !prev);
      };
    return <div className='ChallengeCerts'>
        <div className="add-button" onClick={onInsertToggle}>
      <MdAddCircle/>
    </div>
    {insertToggle && <ChallengeBack onInsertToggle={onInsertToggle}/>}
    </div>;
}


export default Cert;