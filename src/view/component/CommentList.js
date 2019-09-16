import React from 'react';
import Comment from './Comment';
import '../../styles/CommentList.css';

const CommentList = ({ comments, commentsLength }) => {
  console.log('comment list', comments)
  return (
    <div className='comment-list-component'>
      
      <h5 className='comment-list-header'>
          <span className='badge'>
          {commentsLength} 
          </span>
          <span className='comment-list-title'>
          Comment{comments.length === 0 ? "s": "" || comments.length > 1 ? "s": ""}
          </span>
      </h5>

      {comments.map((comments, index) => (
        <Comment 
          key={index}
          comments={comments}
        />
      ))}

    </div>
  );
};

export default CommentList;