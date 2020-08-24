import React, {Component} from 'react';
import classes from './Person.css';
import Auxi from "../../../hoc/Auxi";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Auxi>
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Auxi>
    );
  }
}

export default withClass(Person, classes.Person);