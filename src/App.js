import React, {Component} from 'react';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {
        name: 'test 1'
      },
      {
        name: 'test 2'
      }
    ]
  }
  clickHandler = (newname) => {
    this.setState( state => {
      state.persons[0].name = newname
      return state
    })
  }

  changeValueHandler = (event) => {

    this.setState ( 
      {
        persons: [
          {
            name: event.target.value 
          },
          {
            name: 'test 2'
          }
        ]
      
    })
  }
  render() {
    return (
      <div>
        <h1>Hello there</h1>
        <button onClick={this.clickHandler.bind(this, 'new name')} >Click Here</button>
        <Person name={this.state.persons[0].name} valueChange = {this.changeValueHandler}>This is a children</Person>
        <Person name={this.state.persons[1].name} click={this.clickHandler.bind(this, 'click changes')}>This is a children</Person>
      </div>
    );
  }
}

export default App;
