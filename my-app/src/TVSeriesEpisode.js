import React, { Component } from 'react';
import TVSeries from './TVSeries';

class TVSeriesEpisode extends Component {
    constructor (props) {
        super(props);
        this.state = {
            episodes: [
                {
                    "Title": "Winter Is Coming",
                    "Released": "2011-04-17",
                    "Episode": "1",
                    "imdbRating": "9.0",
                    "imdbID": "tt1480055"
                }, {
                    "Title": "The Kingsroad",
                    "Released": "2011-04-24",
                    "Episode": "2",
                    "imdbRating": "8.8",
                    "imdbID": "tt1668746"
                }, {
                    "Title": "Lord Snow",
                    "Released": "2011-05-01",
                    "Episode": "3",
                    "imdbRating": "8.7",
                    "imdbID": "tt1829962"
                }, {
                    "Title": "Cripples, Bastards, and Broken Things",
                    "Released": "2011-05-08",
                    "Episode": "4",
                    "imdbRating": "8.8",
                    "imdbID": "tt1829963"
                }, {
                    "Title": "The Wolf and the Lion",
                    "Released": "2011-05-15",
                    "Episode": "5",
                    "imdbRating": "9.1",
                    "imdbID": "tt1829964"
                }, {
                    "Title": "A Golden Crown",
                    "Released": "2011-05-22",
                    "Episode": "6",
                    "imdbRating": "9.2",
                    "imdbID": "tt1837862"
                }, {
                    "Title": "You Win or You Die",
                    "Released": "2011-05-29",
                    "Episode": "7",
                    "imdbRating": "9.3",
                    "imdbID": "tt1837863"
                }, {
                    "Title": "The Pointy End",
                    "Released": "2011-06-05",
                    "Episode": "8",
                    "imdbRating": "9.1",
                    "imdbID": "tt1837864"
                }, {
                    "Title": "Baelor",
                    "Released": "2011-06-12",
                    "Episode": "9",
                    "imdbRating": "9.6",
                    "imdbID": "tt1851398"
                }, {
                    "Title": "Fire and Blood",
                    "Released": "2011-06-19",
                    "Episode": "10",
                    "imdbRating": "9.5",
                    "imdbID": "tt1851397"
                }]
        };
    }
    
    componentWillMount() {
        fetch(`http://omdbapi.com/?t=Game of Thrones&Season=2&apikey=a9e149fd`)
            .then(response => response.json())
            .then(data => {
                this.setState.episodes=data;
                console.log(data);
            })
    }

    render () {
        return (
            <div className="App">
                <TVSeries episodes={this.state.episodes}/>
            </div>
        );
    }
}

export default TVSeriesEpisode;