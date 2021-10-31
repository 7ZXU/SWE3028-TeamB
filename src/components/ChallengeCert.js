import React from 'react';
import "./ChallengeCert.css";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import ChallengeBack from "./ChallengeBack";
import Certcheck from "./Certcheck";
import { ImageList } from '@mui/material';
import {ImageListItem} from '@mui/material';

const Cert = ({Cday,cert}) => {
    const [insertToggle, setInsertToggle] = useState(false);
    const [insertToggle2, setInsertToggle2] = useState(false);
    const itemData = [
      {
        id: 1,
        img: require('.\\certset\\1.jpg'),
      },
      {
        id: 2,
        img: require('.\\certset\\2.jpg'),
      },
      {
        id: 3,
        img: require('.\\certset\\3.jpg'),
      },
      {
        id: 4,
        img: require('.\\certset\\4.jpg'),
      }
    ]
    const onInsertToggle = () => {
        setInsertToggle(prev => !prev);
      };
    const onInsertToggle2 = () => {
        setInsertToggle2(prev => !prev);
      };
      const [cimg,imgchange] = useState( require('.\\certset\\2.jpg'))
      const onInsertImage = (inp) => {
        imgchange(inp.target.src);
      };
    return <div className='ChallengeCerts'>
        {!cert && <div className="add-button" onClick={onInsertToggle}><MdAddCircle/></div>}
        {cert && 
        <ImageList sx={{ width: 700, height: 200 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img className='certimage'
              src={ item.img}
              srcSet={item.img}
              onMouseOver ={ onInsertImage}
              onClick={ onInsertToggle2}
            />
          </ImageListItem>
        ))}
        <div className="add-button2" onClick={onInsertToggle}><MdAddCircle/></div>
      </ImageList>}
    {insertToggle && <ChallengeBack onInsertToggle={onInsertToggle}/>}
    {insertToggle2 && <Certcheck onInsertToggle2={onInsertToggle2} img= {cimg}/>}
    </div>;
}


export default Cert;
//C:\\Users\\sksms\\Desktop\\jebal\\src\\Components\\