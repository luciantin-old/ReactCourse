import React, { Component } from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';


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

  handleChange = (e) => {
    this.setState({searchField:e.target.value},()=>console.log(this.state))
  }


  render() {
    console.log()
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder = {'Search Monsters'}
          handler = {this.handleChange}
        />
        <CardList monsters={this.state.monsters.filter(e => e.name.toLowerCase().includes( this.state.searchField))}></CardList>
      </div>
    );
  }
}

export default App;
