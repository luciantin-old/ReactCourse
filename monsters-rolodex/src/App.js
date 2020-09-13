import React, { Component } from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component.jsx';

class App extends Component {
  constructor(){
    super();

    this.state = {
      string: 'Hello Tin',
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({monsters:json}))
  }


  render() {
    console.log()
    return (
      <div className="App">
        <input type='search' onChange={e => this.setState({searchField:e.target.value},()=>console.log(this.state))} placeholder='search monsters'/>
        <CardList monsters={this.state.monsters.filter(e => e.name.includes( this.state.searchField))}></CardList>
      </div>
    );
  }
}

export default App;
