import React from 'react';
import Reply from './Reply';

const ReplyThreadList = ({replies, replyParentCommentid}) => {
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