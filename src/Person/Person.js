import React from 'react';
import './Person.css';

//use this.props.name when using class based components
const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={ props.click } >My name is { props.name } and I am { props.age } years old!</p>
            <input type="text" onChange={ props.changeName } value={ props.name } />
        </div>
    );
}

export default person;