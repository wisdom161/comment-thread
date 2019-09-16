import React from 'react';
import Comment from './Comment';
import ReplyThreadList from './ReplyThreadList';

import '../../styles/CommentList.css';

const CommentList = ({ comments, replyComment, replies, replyParentCommentid }) => {
  return (
    <div className='comment-list-wrapper'>

      {comments.map((comment, index) => (
        <Comment 
          key={comment+index}
          comment={comment}
          replyComment={replyComment}
          replyParentCommentid={replyParentCommentid}
        />
      ))}
        <ReplyThreadList 
          replies={replies}
          replyParentCommentid={replyParentCommentid}
        />

    </div>
  );
};
 // map out the comment replies
export default CommentList;