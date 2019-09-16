import React from 'react';
import Button from './Button';

const Comment = ({ comment, replyComment }) => {
  return (
    <div className='comment' commentid={comment.commentId}>
      
      <h6 className='comment-name'>{comment.name}</h6>
        {comment.message}
        
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