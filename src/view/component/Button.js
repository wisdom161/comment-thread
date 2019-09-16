import React from 'react';
import '../../styles/Button.css';

const Button = ({children, commentid, replyComment}) => {
  return (
    <button 
      className={ `${children}-button` }
      value={commentid}
      onClick={replyComment}
    >
      {children}  
    </button>
  );
};

export default Button;