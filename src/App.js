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

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Albert')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Agatha')} > My Hobbies: Football</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
