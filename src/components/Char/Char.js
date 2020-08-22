import React from 'react';
import './Char.css'

const char = props => (
  <div className="CharComponent" onClick={props.click}>
    {props.char}
  </div>
);

export default char;