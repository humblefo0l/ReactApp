import React from 'react';
import Radium, { StyleRoot } from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className='Person'>
            <p onClick={props.click}>I'm a {props.name} and i am {props.age} year old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    
    )
};


export default Radium(person);  