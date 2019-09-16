import React from 'react';
import Reply from './Reply';

const ReplyThreadList = ({replies, replyCommentid}) => {
    let allReplies = [replies].filter(ele => ele.replyId === replyCommentid);

    console.log('this is all replies', allReplies)
      return (
        <div>
          
        </div>
      )
    
}

export default ReplyThreadList;