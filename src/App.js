import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
import Radium, {StyleRoot} from "radium";

class App extends Component {
  state = {
    persons: [
      {id: 'aaa', name: 'Alice', age: 18},
      {id: 'aab', name: 'Bob', age: 20},
      {id: 'aac', name: 'Charlie', age: 22}
    ],
    showPersons: false,
    text: ''
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  textLengthHandler = event => {
    this.setState({text: event.target.value})
  }

  charRemoveHandler = char => {
    const newText = this.state.text.split('').filter(curChar => curChar !== char).join('');
    this.setState({text: newText})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    const uniqueChars = [...new Set(this.state.text)];

    let chars = (
      <div>
        {uniqueChars.map((char, index) => {
          return <Char
            char={char}
            key={index}
            click={() => this.charRemoveHandler(char)}/>
        })}
      </div>
    );

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>React App</h1>
          <p className={classes.join(' ')}>This is working</p>
          <input type="text" onChange={this.textLengthHandler} value={this.state.text}/>
          <p>Length of the text: {this.state.text.length}</p>
          <Validation textLength={this.state.text.length}/>
          {chars}
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
