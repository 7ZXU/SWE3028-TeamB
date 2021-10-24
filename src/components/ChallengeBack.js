import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import "./ChallengeBack.css";

const ChallengeBack = (onInsertToggle) => {
    return(
    <div>
    <div className="Background" onClick={onInsertToggle}></div>
        <form>
            사진 추가
            <input></input>
            <button type="submit"><MdAddCircle/></button>
        </form>
    </div>
    );
};

export default ChallengeBack;