import React, {Component} from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          buttonClicked={this.togglePersonsHandler}
          text={this.state.text}
          textChanged={this.textLengthHandler}
          charClicked={this.charRemoveHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
