import React from 'react';
import Comment from './Comment';

const CommentList = ({commentsLength}) => {
  return (
    <div className='comment-list-component'>
      <h5 className='comment-list-header'>
        <span className='badge badge-success'>
        {commentsLength} Comments
        </span>
      </h5>
    </div>
  );
};

export default CommentList;