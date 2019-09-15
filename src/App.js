import React, { Component } from 'react';
import './styles/App.css';

import CommentList from './view/component/CommentList';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      comments: [],
      loading: false
    };
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

        <div className='comment-form'>
          <h6>Say something!</h6>
        </div>
        <div className='comment-list'>
          <CommentList
            commentsLength={comments.length}
            comments={comments}
          />
        </div>
      </div>
    );
  }
}

export default App;
