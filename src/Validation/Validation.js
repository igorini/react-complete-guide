import React from 'react';

const validation = props => {
  const minLength = 5;

  const validationMessage = props.textLength >= minLength ?
    "Text long enough" :
    "Text too short";

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;