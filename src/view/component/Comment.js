import React from 'react';
import Button from './Button';

const Comment = ({ comments, replyComment }) => {
  return (
    <div className='comment' commentid={comments.commentId}>
      
      <h6 className='comment-name'>{comments.name}</h6>
        {comments.message}
        
        <Button 
          commentid={comments.commentId}
          replyComment={replyComment}
        >
          reply
        </Button>
        
    </div>
  );
};

export default Comment;