import React, {useEffect, useRef} from 'react';
import Validation from "../Validation/Validation";
import classes from "./Cockpit.css";
import Char from "../Char/Char";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    toggleButtonRef.current.click();
  }, []);

  const assignedClasses = [];
  let buttonClass = '';

  if (props.showPersons) {
    buttonClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  const uniqueChars = [...new Set(props.text)];

  let chars = (
    <div>
      {uniqueChars.map((char, index) => {
        return <Char
          char={char}
          key={index}
          click={() => props.charClicked(char)}/>
      })}
    </div>
  );

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is working</p>
      <input type="text" onChange={props.textChanged} value={props.text}/>
      <p>Length of the text: {props.text.length}</p>
      <Validation textLength={props.text.length}/>
      {chars}
      <button
        ref={toggleButtonRef}
        className={buttonClass}
        onClick={props.buttonClicked}>Toggle Persons
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);