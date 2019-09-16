import React from 'react';
import Button from './Button';

const Comment = ({ comment, replyComment }) => {
  return (
    <div className='comment' commentid={comment.commentId}>
      
      <h6 className='comment-author'>
        {comment.name}
      </h6>
      <div className='comment-message'>
        {comment.message}
      </div>
        
        <Button 
          commentid={comment.commentId}
          handleClick={replyComment}
        >
          reply
        </Button>
        
    </div>
  );
};

export default Comment;