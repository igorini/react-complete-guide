import React from 'react';

const validationComponent = props => {
  const minLength = 5;

  return (
    <div>
      <p>
        {
          props.textLength >= minLength ?
          "Text long enough" :
          "Text too short"
        }
      </p>
    </div>
  );
};

export default validationComponent;