import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Alice', age: 18},
      { name: 'Bob', age: 20},
      { name: 'Charlie', age: 22}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked')
    this.setState({
      persons: [
        { name: newName, age: 18},
        { name: 'Bob', age: 20},
        { name: 'Charlie', age: 23}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Alice', age: 18},
        { name: event.target.value, age: 20},
        { name: 'Charlie', age: 22}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>React App</h1>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Albert')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Agatha')}
          changed={this.nameChangedHandler}> My Hobbies: Football</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
