import React, { Component } from 'react';
import Button from '../component/Button';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: '',
      comment: {
        name: '',
        message: ''
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
        [name]: value
      }
    });
  };

  onSubmit(e) {
    e.preventDefault()
  }
  
  render() {
    const { 
      comment: { name, message },
    } = this.state;

    return(
      <React.Fragment>
        <form method='POST' onSubmit={this.onSubmit}>

          <div className='form'>
            <input
              onChange={this.handleFieldChange}
              value={name}
              className='form-handler'
              placeholder='Your Name'
              name='name'
              type='text'
            />
          </div>
          
          <div className='form'>
            <textarea
              onChange={this.handleFieldChange}
              value={message}
              className='form-handler'
              placeholder='Your comment'
              name='message'
              rows='5'
            />
          </div>

          <div className='form'>
            <Button />
          </div>

        </form>
      </React.Fragment>
    )
  }
};
export default CommentForm;