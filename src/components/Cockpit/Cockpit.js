import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedclasses = [];
    let btnClass = 'green';
    
    if (props.showPerson)btnClass = classes.Red;

    if (props.person.length <= 2){
      assignedclasses.push(classes.red );
    }
    if (props.person.length <=1){
      assignedclasses.push(classes.bold);
    }

    return (
      <div className={classes.Cockpit} >
        <h1>Hi, I'm React App</h1>
        <p className={assignedclasses.join(" ")} >This is really working!</p>
        <button 
          className={btnClass}
          onClick={props.clicked}>Toggle Person </button>
      </div>        
    );
};

export default cockpit; 