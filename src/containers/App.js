import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] conponentDidUpdate');
  }

  state = {
    person: [
      {id: 'aefaf', name: 'Max', age: 28},
      {id: 'weg', name: "Manu", age: 29},
      {id: 'aef2ef', name: "Stephanie", age: 26}
    ],
    otherState: 'some other state',
    showPerson: false,
    showCockpit: true,
    changeCounter: 0
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

    this.setState((prevState, props) => {
      return {
        person: person,
        changeCounter: prevState.changeCounter + 1
      }
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }


  render() {  
    console.log('[App.js] render');
    let persons = null;
  
    if (this.state.showPerson){
      persons = <Persons person={this.state.person}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler} />  
    }

    return (
      <Aux>
         <button onClick={() => {this.setState({showCockpit: false})}} >Remove Cockpit</button>
        {this.state.showCockpit ? 
          <Cockpit 
            title={this.props.appTitle}
            showPerson={this.state.showPerson} 
            personLength={this.state.person.length}
            clicked= {this.togglePersonsHandler} 
             /> : null }
        {persons}
        
      </Aux>

    ); 
  }
}

export default withClass(App, classes.App);
 