import React from 'react';
import Comment from './Comment';
import ReplyThreadList from './ReplyThreadList';

import '../../styles/CommentList.css';

const CommentList = ({ comments, replyComment }) => {
  return (
    <div className='comment-list-wrapper'>

      {comments.map((comments, index) => (
        <Comment 
          key={index}
          comments={comments}
          replyComment={replyComment}
        />
      ))}
        
    </div>
  );
};
 // map out the comment replies
export default CommentList;