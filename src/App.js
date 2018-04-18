import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { id: '1', name: 'Joshua', age: 22 },
        { id: '2', name: 'Molly', age: 23 },
        { id: '3', name: 'Micah', age: 20 }
      ],
      showPersons: false
    }
  }

 /* _switchNameHandler = ( newName ) => {
    //console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Molly', age: 26 },
        { name: 'Micah', age: 20 }
      ]
    });
  } */

  _deletePersonHandler = (personIndex) => {
    //should always update state in a immutable option
    //slice copies the current array and then saves it to persons
    //const persons = this.state.persons.slice();
    //this uses the spread operate which takes the old array and assigns it to the new array
    const persons = [...this.state.persons];
    //removes 1 element from array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  _nameChangedHandle = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      //if this returns then it's true
      return p.id === id;
    });

    //the ... will 
      const person = {
        ...this.state.persons[personIndex]
      };

      //const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
      this.setState({
        persons: persons
      });
  }

  _togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h1>Hi, I'm a fruitloop!</h1>
          <button onClick={ this._togglePersonsHandler } style={ style }>Toggle persons</button>
          { 
            this.state.showPersons === true ? 
            <div>
              { 
                this.state.persons.map((person, index) => {
                  return <Person 
                    name={person.name} 
                    age={person.age} 
                    click={() => this._deletePersonHandler(index) } 
                    key={person.id} 
                    onChange={(event) => this._nameChangedHandle(event, person.id) } />
                }) 
              }
            </div> : null
          }
        </p>
      </div>
    );
  }
}

export default App;
