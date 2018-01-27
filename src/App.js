import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import MemoryGame from './MemoryGame.js';
import Ajax from './Jobs.js';



class App extends Component {

      constructor() {
        super();
      }

      render() {
        return (
            <div className="App">
                <div className="navbar">
                    <Link to="/memory">Memory Game</Link>
                    <Link to="/ajax">Ajax</Link>
                </div>
                <Switch><Route path="/" component={MemoryGame}/></Switch>
                <Switch><Route path="/memory" component={MemoryGame}/></Switch>
                <Switch><Route path="/ajax" component={Ajax}/></Switch>
            </div>
        );
      }
    }

    export default App;
