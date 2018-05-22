import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import TVSeriesEpisode from './TVSeriesEpisode';
import toDoList from './toDoList';
import Form from './Form';
import Game from './tic-tac-toe';
import Home from './Home';

const App = () => (
  <Router>
    <div>
      <div className="nav">
        <ul>
          <li><a><Link to="/">Home </Link></a></li>
          <li><a><Link to="/form">Form </Link></a></li>
          <li><a><Link to="/toDoList">ToDoList </Link></a></li>
          <li><a><Link to="/game">Game </Link></a></li>
          <li><a><Link to="/tvSeriesEpisode">TV Series Episode</Link></a></li>
        </ul>
      </div><br />
      <Route path="/" exact component={Home} />
      <Route path="/form" exact component={Form} />
      <Route path="/toDoList" exact component={toDoList} />
      <Route path="/game" exact component={Game} />
      <Route path="/tvSeriesEpisode" exact component={TVSeriesEpisode} />
    </div>
  </Router>
);

export default App;