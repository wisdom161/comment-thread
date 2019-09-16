import React from 'react';
import '../../styles/Button.css';

const Button = ({children, loading}) => {
  return (
    <button 
      disabled={loading} 
      className={ `${children}-button` }
    >
      {children}  
    </button>
  );
};

export default Button;