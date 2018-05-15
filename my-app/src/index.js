import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TVSeriesEpisode from './TVSeriesEpisode';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render(<TVSeriesEpisode />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
