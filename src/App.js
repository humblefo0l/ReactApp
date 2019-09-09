import React, { Component } from 'react';
import classes from './App.css';
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
    
    let persons = null;
    let btnClass = '';

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
      
      btnClass = classes.Red;
    }

    const assignedclasses = [];
    if (this.state.person.length <= 2){
      assignedclasses.push(classes.red );
    }
    if (this.state.person.length <=1){
      assignedclasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm React App</h1>
        <p className={assignedclasses.join(" ")} >This is really working!</p>
        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Person </button>
        {persons}
      </div>

    );
  }
}

export default App;
