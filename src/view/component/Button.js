import React from 'react';

const Button = ({loading}) => {
  return (
    <button 
      disabled={loading} 
      className='button'
    >
      Comment  
    </button>
  );
};

export default Button;