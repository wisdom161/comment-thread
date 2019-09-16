import React from 'react';
import Comment from './Comment';
import '../../styles/CommentList.css';

const CommentList = ({ comments, commentsLength, replyComment }) => {
  // console.log('comment list', comments)
  return (
    <div className='comment-list-component'>
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

export default CommentList;