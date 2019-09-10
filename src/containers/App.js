import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    person: [
      {id: 'aefaf', name: 'Max', age: 28},
      {id: 'weg', name: "Manu", age: 29},
      {id: 'aef2ef', name: "Stephanie", age: 26}
    ],
    otherState: 'some other state',
    showPerson: false
  }
  
  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // this.state.person[0].name = 'Maximilian'; 
    this.setState({
      person: [
        {name: newName, age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 27}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.person.slice();
    const persons = [...this.state.person];
    persons.splice(personIndex,1);
    this.setState({person: persons})
  }

  nameChangedHandler = (event, id) => {
    const perIndex = this.state.person.findIndex(p => {
        return p.id === id;
    });

    const per = {...this.state.person[perIndex]};
    // const per = Object.assign({}, this.state.person[perIndex]);

    per.name = event.target.value;

    const person = [...this.state.person];
    person[perIndex] = per;

    this.setState({person: person});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }


  render() {  
    let persons = null;
  
    if (this.state.showPerson){
      persons = <Persons person={this.state.person}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler} />  
    }

    return (
      <div className={classes.App}>
        <Cockpit showPerson={this.state.showPerson} 
          person={this.state.person}
          clicked= {this.togglePersonsHandler} />
        {persons}
      </div>

    );
  }
}

export default App;
