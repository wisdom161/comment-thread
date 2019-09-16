import React from 'react';
import '../../styles/Button.css';

const Button = ({children, commentid, handleClick = () => {}}) => {
  // const handleClick = (e) => {
  //   // console.log(replyComment)
  //   replyComment(e, commentid);
  // }
  return (
    <button 
      className={ `${children}-button` }
      onClick={(e) => handleClick(e, commentid)}
    >
      {children}  
    </button>
  );
};

export default Button;