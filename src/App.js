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
      loading: false,
      replyThread: false,
      replyThreadCommentid: null,
    };

    this.addComment = this.addComment.bind(this);
    this.replyComment = this.replyComment.bind(this);
  };

  addComment(comment) {
    this.setState({
      loading: false,
      comments: [...this.state.comments, comment]
    });
  };

  replyComment(e) {
    e.preventDefault();
    console.log('this is e.target', e.target.value);
    const commentId = e.target.value;

    this.setState({
      replyThread: !this.state.replyThread,
      replyThreadCommentid: Number(commentId)
    });
  }

  render() {

    const {
      comments,
      replyThread,
      replyThreadCommentid
    } = this.state;
    // console.log(comments[0].commentId)
    return (
      <div className='app-container'>
        <header className='app-header'>
          <h1 className='app-title'>
            React Comment Thread
          </h1>
        </header>

        <div className='comment-list'>
          <CommentList
          commentsLength={comments.length}
          comments={comments}
          replyComment={this.replyComment}
          />
          {replyThread ? 
            <ReplyThread 
              commentid={replyThreadCommentid}
              comments={comments.filter(ele => ele.commentId === replyThreadCommentid)}  
            /> 
              : null
          }
        </div>
          <div className='comment-form'>
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

            <CommentForm
              addComment={this.addComment}
            />

        </div>
      </div>
    );
  };
};

export default App;
