import React, { Component } from 'react';
import Button from '../component/Button';

class ReplyThreadForm extends Component {
  constructor(props) {
    super(props)
    // console.log('this is comments', this.props.commentid)
    this.state = {
      error: '',
      reply: {
        name: '',
        message: '',
        parentCommentId: this.props.commentid
      }
    };

    this.handleReplyFieldChange = this.handleReplyFieldChange.bind(this);
    this.onThreadSubmit = this.onThreadSubmit.bind(this);
  };

  handleReplyFieldChange(e) {
    const { value, name } = e.target;
    this.setState({
      reply: {
        ...this.state.reply,
        [name]: value,
      }
    });
  };

  onThreadSubmit(e) {
    e.preventDefault();

    if(!this.isFormValid()) {
      this.setState({ error: "Please fill out all fields!" });
      return;
    };
    
    const { reply } = this.state;
    const commentId = this.state.reply.parentCommentId;
    this.props.addReply(reply, commentId);
    
      //clears text area
    this.setState({
      reply: { 
        ...reply, 
        message: ""
      }
    });
  
    };

    isFormValid() {
      const {
        reply: { 
          name, 
          message 
        }
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
        reply: { 
          name, 
          message 
        },
      } = this.state;

      return (
     <React.Fragment>
        <form 
          name='replyThread' 
          onSubmit={this.onThreadSubmit}
        >

          <div className='replyThread'>
            <input
              onChange={this.handleReplyFieldChange}
              value={name}
              placeholder='Your Name'
              name='name'
              type='text'
            />
          </div>
          
          <div className='replyThread'>
            <textarea
              onChange={this.handleReplyFieldChange}
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

export default ReplyThreadForm;
