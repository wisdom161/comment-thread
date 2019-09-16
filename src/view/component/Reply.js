import React from 'react';
import '../../styles/Reply.css';

const Reply = ({ message, name }) => {
  // console.log('this is name',name)
  return (
    <div className='reply-comment'>

      <div className='reply-author'>{name}</div>
       {message} 
    </div>
  );
};

export default Reply;