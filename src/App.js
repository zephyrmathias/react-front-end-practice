import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './containers/Navbar';
import IndexPage from './pages/index';
import StickyTablePage from './pages/sticky-table';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/sticky-table" component={StickyTablePage} />
      </div>
    );
  }
}

export default App;
