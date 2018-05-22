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
          <li><Link to="/">Home </Link></li>
          <li><Link to="/form">Form </Link></li>
          <li><Link to="/toDoList">ToDoList </Link></li>
          <li><Link to="/game">Game </Link></li>
          <li><Link to="/tvSeriesEpisode">TV Series Episode</Link></li>
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