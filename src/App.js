import React, { Component } from 'react';
import './index.css';
import {SearchApp} from './search';
import {SearchList} from './searchlist';


class App extends Component {
  render() {

    return (
      <div className="content">
            <SearchApp  />
            <SearchList />

      </div>

    );
  }
}

export default App;
