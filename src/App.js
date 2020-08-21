import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: 'Alice', age: 18},
      {name: 'Bob', age: 20},
      {name: 'Charlie', age: 22}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked')
    this.setState({
      persons: [
        {name: newName, age: 18},
        {name: 'Bob', age: 20},
        {name: 'Charlie', age: 23}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Alice', age: 18},
        {name: event.target.value, age: 20},
        {name: 'Charlie', age: 22}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
