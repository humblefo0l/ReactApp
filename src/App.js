import React, { Component } from 'react';
import './App.css';
import Radium , { StyleRoot } from 'radium';
import Person from './Person/Person';

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

    let persons = null;

    if (this.state.showPerson){
      persons = (
        <div >
          {this.state.person.map( (p, index) => {
            return <Person 
            click = {() => this.deletePersonHandler(index)}
            name={p.name} 
            age= {p.age}
            key= {p.id} 
            changed = {(event) => this.nameChangedHandler(event, p.id)} />
          })}
        </div>  
      )

      style.backgroundColor = 'red';  
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.person.length <= 2){
      classes.push('red');
    }
    if (this.state.person.length <=1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
        <h1>Hi, I'm React App</h1>
        <p className={classes.join(" ")} >This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Person </button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
