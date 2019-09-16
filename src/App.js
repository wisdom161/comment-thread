import React, { Component } from 'react';
import './styles/App.css';

import CommentList from './view/component/CommentList';
import CommentForm from './view/container/CommentForm';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      comments: [],
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  };

  addComment(comment) {
    this.setState({
      loading: false,
      comments: [...this.state.comments, comment]
    })
  }

  render() {

    const {
      comments
    } = this.state;

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
          />
        </div>
          <div className='comment-form'>
            <h6>Say something!</h6>
            <CommentForm
              addComment={this.addComment}
            />
        </div>
      </div>
    );
  };
};

export default App;
