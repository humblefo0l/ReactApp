import React, { Component } from 'react';

import Aux from '../../../hoc/Aux'
import classes from './Person.css';


class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');
        return <Aux>
                <p key="i1" onClick={this.props.click}>
                    I'm a {this.props.name} and i am {this.props.age} year old! 
                </p>
                <p key="i2">{this.props.children}</p>
                <input 
                key="i3"
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} 
                />
        </Aux>;
    }
    
};


export default Person;  