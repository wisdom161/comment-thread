import React from 'react';

const Comment = ({time, name, message}) => {

  return (
    <div className='comment'>
      <small className='time'>{time}</small>
      <h6 className='comment-name'>{name}</h6>
      {message}
    </div>
  );
};

export default Comment;