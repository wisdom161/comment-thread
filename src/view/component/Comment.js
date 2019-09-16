import React from 'react';

const Comment = ({ comments }) => {
  console.log('inside comment', comments)
  return (
    <div className='comment'>
      <small className='time'></small>
      <h6 className='comment-name'>{comments.name}</h6>
        {comments.message}
    </div>
  );
};

export default Comment;