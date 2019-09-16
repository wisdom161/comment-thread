import React from 'react';
import Comment from './Comment';
import ReplyThreadList from './ReplyThreadList';

import '../../styles/CommentList.css';

const CommentList = ({ comments, replyComment, replies, replyCommentid }) => {
  return (
    <div className='comment-list-wrapper'>

      {comments.map((comments, index) => (
        <Comment 
          key={index}
          comments={comments}
          replyComment={replyComment}
          replyCommentid={replyCommentid}
        />
      ))}
        <ReplyThreadList 
          replies={replies}
        />

    </div>
  );
};
 // map out the comment replies
export default CommentList;