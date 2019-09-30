import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  useEffect( () => {
    console.log('[Cockpit.js useEffet'); 
    // HTTP request...
    setTimeout( () => {
      alert('Saved data from cloud');
    }, 1000);

    return () => {
      console.log('[Cockpit.js] cleanup work in userEffect');
    }      
  }, []);

  useEffect( () => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedclasses = [];
  let btnClass = 'green';
  
  if (props.showPerson)btnClass = classes.Red;

  if (props.personLength <= 2){
    assignedclasses.push(classes.red );
  }
  if (props.personLength <=1){
    assignedclasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit} >
      <h1>{props.title}</h1>
      <p className={assignedclasses.join(" ")} >This is really working!</p>
      <button 
        className={btnClass}
        onClick={props.clicked}>Toggle Person </button>
      
    </div>        
  );
};

export default React.memo(cockpit); 