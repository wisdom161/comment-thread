import React, { Component } from 'react';
import Button from '../component/Button';
import '../../styles/CommentForm.css';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: '',
      comment: {
        name: '',
        message: '',
        commentId: 0
      }
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  handleFieldChange(e) {
    const { value, name } = e.target;
    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value,
      }
    });
  };

  onSubmit(e) {
    e.preventDefault();

    if(!this.isFormValid()) {
      this.setState({ error: "Please fill out all fields!" });
      return;
    };
    const { comment } = this.state;
    this.setState({
        ...this.state,
        error: '',
        loading: true,
        commentId: comment.commentId+=1
      })

    this.props.addComment(comment);
    
    //clears text area
    this.setState({
      loading: false,
      comment: { ...comment, message: "" }
    });

  };

  isFormValid() {
    const {
      comment: { name, message }
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
      comment: { name, message },
    } = this.state;

    return(
      <React.Fragment>
        <form 
          name='form' 
          onSubmit={this.onSubmit}
        >

          <div className='form'>
            <input
              onChange={this.handleFieldChange}
              value={name}
              placeholder='Your Name'
              name='name'
              type='text'
            />
          </div>
          
          <div className='form'>
            <textarea
              onChange={this.handleFieldChange}
              value={message}
              placeholder='Your comment'
              name='message'
              rows='5'
            />
          </div>

          {this.formError()}

          <div className='form'>
            <Button>
              Comment
            </Button>
          </div>

        </form>
      </React.Fragment>
    );
  };
};

export default CommentForm;