import React, { Component } from 'react';
import './styles/App.css';

import CommentList from './view/component/CommentList';
import ReplyThread from './view/container/ReplyThread';
import CommentForm from './view/container/CommentForm';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      comments: [],
      replies: [],
      replyThread: false,
      replyThreadCommentid: null,
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

  addReply(reply) {
    this.setState({
      replies: [...this.state.replies, reply]
    });
  };

  replyComment(e) {
    e.preventDefault();
    const commentId = e.target.value;

    this.setState({
      replyThread: !this.state.replyThread,
      replyThreadCommentid: Number(commentId)
    });
  };

  render() {

    const {
      comments,
      replyThread,
      replyThreadCommentid
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
          />

          {replyThread ? 
            <ReplyThread
              addReply={this.addReply} 
              commentid={replyThreadCommentid}
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
