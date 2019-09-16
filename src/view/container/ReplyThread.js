import React, { Component } from 'react';
import Button from '../component/Button';

class ReplyThread extends Component {
  constructor(props) {
    super(props)
    console.log('this is comments', this.props.comments)
    this.state = {
      commentsInThread: this.props.comments,
      loading: false,
      error: '',
      replies: [],
      reply: {
        name: '',
        message: '',
      }
    };

    this.handleThreadFieldChange = this.handleThreadFieldChange.bind(this);
    this.onThreadSubmit = this.onThreadSubmit.bind(this);
  };

  handleThreadFieldChange(e) {
    const { value, name } = e.target;
    this.setState({
      ...this.state,
      reply: {
        ...this.state.reply,
        [name]: value,
      }
    });
  };

  addReply (comment) {
    this.setState({
      loading: false,
      replies: [...this.state.replies, comment]
    });
  };

  onThreadSubmit(e) {
    e.preventDefault();

    if(!this.isFormValid()) {
      this.setState({ error: "Please fill out all fields!" });
      return;
    };
    const { reply } = this.state;
    this.setState({
        ...this.state,
        error: '',
        loading: true,
      })
      this.addReply(reply);
    
      //clears text area
      this.setState({
        loading: false,
        reply: { ...reply, message: "" }
      });
  
    };

    isFormValid() {
      const {
        reply: { name, message }
      } = this.state;
  
      return name !== '' && message !== '';
    };
  
    formError() {
      const { error } = this.state;
      return error ? (
        <div className='form-error'>{error}</div>
      ) : null;
    };

    render() {
      const { 
        reply: { name, message },
      } = this.state;

      return (
     <React.Fragment>
        <form 
          name='replyThread' 
          onSubmit={this.onThreadSubmit}
        >

          <div className='replyThread'>
            <input
              onChange={this.handleThreadFieldChange}
              value={name}
              placeholder='Your Name'
              name='name'
              type='text'
            />
          </div>
          
          <div className='replyThread'>
            <textarea
              onChange={this.handleThreadFieldChange}
              value={message}
              placeholder='Your reply'
              name='message'
              rows='5'
            />
          </div>

          {this.formError()}

          <div className='replyThread'>
            <Button>
              Reply
            </Button>
          </div>

        </form>
      </React.Fragment>
      );
    };
};

export default ReplyThread;
