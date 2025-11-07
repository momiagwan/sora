/*import React from "react"
import  { useState } from 'react';
import {clans} from "../constants"

const ReadMore = ({ text, maxLength = 100 }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const text= clans.map((clans,index)=>{return clans.text})
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <p>
        {isReadMore ? clans.text.slice(0, maxLength) : clans.text}
        {clans.text.length > maxLength && (
          <span onClick={toggleReadMore} style={{ color: 'blue', cursor: 'pointer' }}>
            {isReadMore ? '... read more' : ' show less'}
          </span>
        )}
      </p>
    </div>
  );
};

export default ReadMore;