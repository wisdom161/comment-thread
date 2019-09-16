import React from 'react';
import '../../styles/Button.css';

const CommentButton = ({children, commentid, replyComment}) => {
  return (
    <button 
      className={ `${children}-button` }
      value={commentid}
    >
      {children}  
    </button>
  );
};

export default CommentButton;