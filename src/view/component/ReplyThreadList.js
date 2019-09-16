import React from 'react';
import Reply from './Reply';

const ReplyThreadList = ({replies, replyParentCommentid}) => {
    // let allReplies = [replies].filter(ele => ele.replyId === replyParentCommentid);
    replies.forEach(ele => console.log('hi',ele.parentCommentId))
      return (
        <div className='reply-thread-list-wrapper'>
          
          {replies.map((reply, index) => (
            <Reply
              key={reply.message+index}
              message={reply.message}
              name={reply.name}
            />
          ))}
        </div>
      );

};

export default ReplyThreadList;