// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import Person from './Person/Person';


// class Persons extends Component{
class Persons extends PureComponent{
//    static getDerivedStateFromProps(props, state){
//        console.log('[Persons.js] getDerivedStateFromProps');
//        return state;
//    }

//     componentWillReceiveProps(props){
//         console.log('[Persons.js] componentWillReceiveProps', props);
//     }

//    shouldComponentUpdate(nextProps, nextState){
//        console.log('[Persons.js] shouldComponentUpdate');
//        if (
//            nextProps.person !== this.props.person || 
//            nextProps.changed !== this.props.changed || 
//            nextProps.clicked !== this.props.clicked){
//            return true;
//        }else{
//            return false;
//        }

//    }    

   getSnapshotBeforeUpdate(prevProps, prevState){
       console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
   }

   componentDidUpdate(){
       console.log('[Persons.js] componentDidUpdate');
   }

   componentWillUnmount(){
       console.log('[Persons.js] componentWillUnmount');  
   }

    render(){
        console.log('[Persons.js] rendering...');
        return this.props.person.map( (p, index) => {
            return <Person 
            click = {() => this.props.clicked(index)}
            name={p.name} 
            age= {p.age}
            key= {p.id} 
            changed = {(event) => this.props.changed(event, p.id)} />
        })
    }
    
};


export default Persons;
