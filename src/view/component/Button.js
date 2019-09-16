import React from 'react';
import '../../styles/Button.css';

const Button = ({children, commentid, loading, replyComment}) => {
  return (
    <button 
      disabled={loading} 
      className={ `${children}-button` }
      value={commentid}
      onClick={replyComment}
    >
      {children}  
    </button>
  );
};

export default Button;