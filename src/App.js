import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <Person name="Alice" age="18" />
        <Person name="Bob" age="20" >My Hobbies: Football</Person>
        <Person name="Charlie" age="22" />
      </div>
    );
  }
}

export default App;
