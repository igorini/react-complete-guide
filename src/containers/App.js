import React, {Component} from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Auxi from "../hoc/Auxi";
import AuthContext from "../context/auth-context";
import withClass from "../hoc/withClass";

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 'aaa', name: 'Alice', age: 18},
      {id: 'aab', name: 'Bob', age: 20},
      {id: 'aac', name: 'Charlie', age: 22}
    ],
    showPersons: false,
    text: '',
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    this.setState({text: event.target.value});
  }

  charRemoveHandler = char => {
    const newText = this.state.text.split('').filter(curChar => curChar !== char).join('');
    this.setState({text: newText});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] render')
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}/>
    }

    return (
      <Auxi>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login:this.loginHandler}}>
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            buttonClicked={this.togglePersonsHandler}
            loginClicked={this.loginHandler}
            text={this.state.text}
            textChanged={this.textLengthHandler}
            charClicked={this.charRemoveHandler}/>
          {persons}
        </AuthContext.Provider>
      </Auxi>
    );
  }
}

export default withClass(App, classes.App);
