import React, { Component } from 'react';
import './styles/App.css';

import CommentList from './view/component/CommentList';
import ReplyThreadForm from './view/container/ReplyThreadForm';
import CommentForm from './view/container/CommentForm';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      comments: [],
      replyThread: false,
      replyParentCommentid: null,
    };

    this.addComment = this.addComment.bind(this);
    this.addReply = this.addReply.bind(this);
    this.replyComment = this.replyComment.bind(this);
  };

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    });
  };

  // function to add reply to replies array in comments array
  addReply(reply, commentId) {
    const comments = [...this.state.comments];

    comments.reduce((comments, comment) => {
      if (comment.commentId === commentId) {
        comment.replies.push(reply)
      }
      comments.push(comment)
      return comments
    }, [])

    this.setState({
      comments
    });
  };

    // activates reply form for replies to be submitted
  replyComment(e, commentId) {
    e.preventDefault();
    console.log(commentId)
    this.setState({
      replyThread: !this.state.replyThread,
      replyParentCommentid: commentId
    });
  };

  render() {

    const {
      comments,
      replyThread,
      replyParentCommentid
    } = this.state;

    return (
      <div className='app-container'>
        
        <header className='app-header'>
          <h1 className='app-title'>
            React Comment Thread
          </h1>
        </header>

          <CommentList
            commentsLength={comments.length}
            comments={comments}
            replyComment={this.replyComment}
            replyParentCommentid={replyParentCommentid}
          />

          {replyThread ? 
            <ReplyThreadForm
              addReply={this.addReply} 
              commentid={replyParentCommentid}
            /> 
              : null
          }

        <div className='comment-form-wrapper'>
          <div className='comment-form-header'>
            <h6>Say something!</h6>
            
            <h6 className='comment-list-title'>
              <span className='badge'>
                {comments.length} 
              </span>
              <span className='comment-list-counter'>
                Comment{comments.length === 0 ? "s": "" || comments.length > 1 ? "s": ""}
              </span>      
            </h6>
          </div>

          <CommentForm addComment={this.addComment} />
        </div>

      </div>
    );
  };
};

export default App;
